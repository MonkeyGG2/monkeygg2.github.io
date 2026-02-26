// 敌人AI系统 - 基于FNAF机制
class EnemyAI {
    constructor(game) {
        this.game = game;

        // ==================== AI配置系统 ====================
        // Epstein AI配置（按夜数）
        this.epsteinConfig = {
            1: {
                aiLevel: 12,              // AI等级 (0-20)，12/24 = 50%移动概率
                movementInterval: [9000, 10000],  // 移动检查间隔（毫秒）[最小值, 最大值]
                movementDuration: 1000,   // 移动动画时长（毫秒）
                spawnDelay: 120000,        // 出场延迟（毫秒）
                movementProbability: {    // 移动方向概率
                    forward: 0.8,         // 前进概率 100%
                    lateral: 0.1,         // 平移概率 0%（当前不支持）
                    backward: 0.1         // 后退概率 0%
                },
                soundLureResistance: 0  // 对sound吸引的抵抗概率（0-1）
            },
            2: {
                aiLevel: 12,
                movementInterval: [9000, 10000],
                movementDuration: 1000,
                spawnDelay: 0,
                movementProbability: {
                    forward: 0.8,
                    lateral: 0.1,
                    backward: 0.1
                },
                soundLureResistance: 0.1
            },
            3: {
                aiLevel: 12,
                movementInterval: [9000, 10000],
                movementDuration: 1000,
                spawnDelay: 0,
                movementProbability: {
                    forward: 0.8,
                    lateral: 0.2,
                    backward: 0
                },
                soundLureResistance: 0.1  // Night 3开始：15%概率抵抗sound吸引
            },
            4: {
                aiLevel: 12,
                movementInterval: [9000, 10000],    // Night 4：9-10秒间隔
                movementDuration: 1000,
                spawnDelay: 0,
                movementProbability: {
                    forward: 0.9,
                    lateral: 0.1,
                    backward: 0
                },
                soundLureResistance: 0.15
            },
            5: {
                aiLevel: 12,
                movementInterval: [9000, 10000],    // Night 5：9-10秒间隔
                movementDuration: 1000,
                spawnDelay: 0,
                movementProbability: {
                    forward: 0.9,
                    lateral: 0.1,
                    backward: 0.0
                },
                soundLureResistance: 0.15
            },
            6: {
                aiLevel: 12,
                movementInterval: [7500, 8500],  // 7.5-8.5秒间隔
                movementDuration: 1000,
                spawnDelay: 0,  // Night 6立即出场
                movementProbability: {
                    forward: 0.85,  // 85%前进
                    lateral: 0.15,  // 15%平移
                    backward: 0.0  // 不后退
                },
                soundLureResistance: 0.15
            }
        };

        // Trump AI配置（按夜数，Night 2开始）
        this.trumpConfig = {
            2: {
                aiLevel: 10,              // AI等级，10/24 = 42%移动概率
                movementInterval: [8000, 9000],  // 8-9秒随机（比EP快一点）
                movementDuration: 1000,   // 移动动画时长（毫秒）
                spawnDelay: 0,            // 出场延迟（毫秒），开局就出场
                movementProbability: {    // 移动方向概率
                    forward: 0.9,         // 90% 前进（更激进）
                    lateral: 0.1,         // 10% 平移
                    backward: 0.0         // 0% 后退
                },
                ventCrawling: {           // 通风管爬行配置
                    cam1Probability: 1.0, // 在cam1时爬行概率 100%
                    cam2Probability: 0.5, // 在cam2时爬行概率 50%
                    soundDelay: 5000,     // 开始爬行后多久播放音效（毫秒）
                    soundDuration: 10000, // 爬行音效持续时长（毫秒）
                    totalDuration: 20000, // 爬行总时长（毫秒）
                    retreatDelay: 2000,   // 被阻止后多久播放撤退音效（毫秒）
                    retreatSoundDuration: 3000 // 撤退音效持续时长（毫秒）
                }
            },
            3: {
                aiLevel: 11,              // 降低到46%移动概率（从55%）
                movementInterval: [9000, 10000],  // 改为9-10秒（从8-9秒）
                movementDuration: 1000,
                spawnDelay: 0,
                movementProbability: {
                    forward: 0.75,        // 降低到75%前进（从80%）
                    lateral: 0.25,        // 增加到25%平移
                    backward: 0.0
                },
                ventCrawling: {
                    cam1Probability: 1.0,
                    cam2Probability: 0.4, // 降低到40%（从50%）
                    soundDelay: 5000,
                    soundDuration: 10000,
                    totalDuration: 20000,
                    retreatDelay: 2000,
                    retreatSoundDuration: 3000
                }
            },
            4: {
                aiLevel: 13,
                movementInterval: [8000, 9000],    // 8-9秒随机（比EP快）
                movementDuration: 1000,
                spawnDelay: 0,
                movementProbability: {
                    forward: 0.8,         // 80% 前进
                    lateral: 0.2,         // 20% 平移
                    backward: 0.0
                },
                ventCrawling: {
                    cam1Probability: 1.0,
                    cam2Probability: 0.5,
                    soundDelay: 5000,
                    soundDuration: 10000,
                    totalDuration: 20000,
                    retreatDelay: 2000,
                    retreatSoundDuration: 3000
                }
            },
            5: {
                aiLevel: 13,
                movementInterval: [8000, 9000],    // 8-9秒随机（比EP快）
                movementDuration: 1000,
                spawnDelay: 0,
                movementProbability: {
                    forward: 0.8,         // 80% 前进
                    lateral: 0.2,         // 20% 平移
                    backward: 0.0
                },
                ventCrawling: {
                    cam1Probability: 1.0,
                    cam2Probability: 0.5,
                    soundDelay: 5000,
                    soundDuration: 10000,
                    totalDuration: 20000,
                    retreatDelay: 2000,
                    retreatSoundDuration: 3000
                }
            }
        };

        // 当前配置（运行时使用）
        this.currentEpsteinConfig = null;
        this.currentTrumpConfig = null;

        // 爱泼斯坦的状态
        this.epstein = {
            currentLocation: 'cam11', // 起始位置（最远）
            aiLevel: 0, // AI等级 (0-20, 分母24)
            movementTimer: null,
            movementInterval: 12000, // 移动检查间隔
            hasMovedOnce: false, // 是否已经移动过一次
            hasSpawned: false, // 是否已经出场
        };

        // 特朗普的状态
        this.trump = {
            currentLocation: 'cam10', // 起始位置
            aiLevel: 0, // AI等级 (0-20)
            movementTimer: null,
            movementInterval: 10000, // 移动检查间隔
            hasSpawned: false, // 是否已经出场
            isCrawling: false, // 是否正在爬行
            crawlingTimer: null, // 爬行计时器
            crawlingFrom: null, // 从哪个摄像头开始爬行（cam1或cam2）
            retreatTimer: null, // 撤退计时器
        };

        // 霍金的状态（第3关开始）
        this.hawking = {
            active: false, // 是否激活
            location: 'cam6', // 固定在cam6
            timer: null, // 计时器
            warningLevel: 0, // 0=无警告, 1=黄色警告, 2=红色警告
            warningTimer: null, // 警告计时器
            attackTimer: null, // 攻击计时器
        };

        // 每个摄像头使用的角色图片（根据距离办公室远近）
        this.characterImages = {
            'cam11': '/assets/images/enemyep1.png',
            'cam10': '/assets/images/ep1.png',
            'cam1': '/assets/images/ep4.png',
            'cam9': '/assets/images/enemyep1.png',
            'cam8': '/assets/images/enemyep1.png',
            'cam7': '/assets/images/enemyep1.png',
            'cam6': '/assets/images/enemyep1.png',
            'cam5': '/assets/images/enemyep4.png',
            'cam4': '/assets/images/ep1.png',
            'cam3': '/assets/images/ep4.png',
            'cam2': '/assets/images/enemyep1.png',
        };

        // Night 6 专用图片（带电眼）
        this.characterImagesNight6 = {
            'cam11': '/assets/images/enemyep1_night6.png',
            'cam10': '/assets/images/ep1_night6.png',
            'cam1': '/assets/images/ep4_night6.png',
            'cam9': '/assets/images/enemyep1_night6.png',
            'cam8': '/assets/images/enemyep1_night6.png',
            'cam7': '/assets/images/enemyep1_night6.png',
            'cam6': '/assets/images/enemyep1_night6.png',
            'cam5': '/assets/images/enemyep4_night6.png',
            'cam4': '/assets/images/ep1_night6.png',
            'cam3': '/assets/images/ep4_night6.png',
            'cam2': '/assets/images/enemyep1_night6.png',
        };

        // 特朗普的图片配置（使用绝对路径）
        this.trumpImages = {
            'cam10': '/assets/images/trump3.png',
            'cam11': '/assets/images/trump3.png',
            'cam9': '/assets/images/trump.png',
            'cam8': '/assets/images/trump5.png',
            'cam7': '/assets/images/trump3.png',
            'cam6': '/assets/images/trump3.png',
            'cam5': '/assets/images/trump2.png',
            'cam1': '/assets/images/trump4.png',
            'cam2': '/assets/images/trump4.png',
            'cam3': '/assets/images/trump2.png',
            'cam4': '/assets/images/trump3.png',
        };

        // 定义移动路径图（根据地图连接关系，只能向前移动）
        // 每个位置的步长（距离办公室的最短路径长度）- 使用BFS计算
        // Office ← Cam1 ← Cam3 ← ...
        this.locationDepth = {
            'office': 0,  // 终点
            'cam1': 1,    // Cam1 → Office (1步)
            'cam2': 2,    // Cam2 → Cam1 → Office (2步) ✅ 修正
            'cam3': 2,    // Cam3 → Cam1 → Office (2步)
            'cam6': 3,    // Cam6 → Cam3 → Cam1 → Office (3步)
            'cam4': 3,    // Cam4 → Cam3 → Cam1 → Office (3步)
            'cam5': 4,    // Cam5 → Cam6 → Cam3 → Cam1 → Office (4步)
            'cam7': 4,    // Cam7 → Cam4 → Cam3 → Cam1 → Office (4步)
            'cam8': 5,    // Cam8 → Cam5 → Cam6 → Cam3 → Cam1 → Office (5步)
            'cam11': 5,   // Cam11 → Cam7 → Cam4 → Cam3 → Cam1 → Office (5步)
            'cam9': 5,    // Cam9 → Cam7 → Cam4 → Cam3 → Cam1 → Office (5步)
            'cam10': 6,   // Cam10 → Cam9 → Cam7 → Cam4 → Cam3 → Cam1 → Office (6步)
        };

        // 特朗普的步长配置（使用和EP相同的步长，一步一步走）
        this.trumpLocationDepth = {
            'office': 0,  // 终点
            'cam1': 1,    // Cam1 → Office (1步)
            'cam2': 2,    // Cam2 → Cam1 → Office (2步)
            'cam3': 2,    // Cam3 → Cam1 → Office (2步)
            'cam6': 3,    // Cam6 → Cam3 → Cam1 → Office (3步)
            'cam4': 3,    // Cam4 → Cam3 → Cam1 → Office (3步)
            'cam5': 4,    // Cam5 → Cam6 → Cam3 → Cam1 → Office (4步)
            'cam7': 4,    // Cam7 → Cam4 → Cam3 → Cam1 → Office (4步)
            'cam8': 5,    // Cam8 → Cam5 → Cam6 → Cam3 → Cam1 → Office (5步)
            'cam11': 5,   // Cam11 → Cam7 → Cam4 → Cam3 → Cam1 → Office (5步)
            'cam9': 5,    // Cam9 → Cam7 → Cam4 → Cam3 → Cam1 → Office (5步)
            'cam10': 6,   // Cam10 → Cam9 → Cam7 → Cam4 → Cam3 → Cam1 → Office (6步)
        };

        // 定义移动路径图（只能向办公室方向移动，不能后退）
        this.movementPaths = {
            'cam11': ['cam7', 'cam8'], // Cam11只连接Cam7和Cam8
            'cam9': ['cam7', 'cam10'],
            'cam10': ['cam9'], // 死胡同，只能去cam9
            'cam8': ['cam7', 'cam5'],
            'cam7': ['cam4'],
            'cam4': ['cam2', 'cam3'], // 修正：添加cam3
            'cam5': ['cam4', 'cam6'],
            'cam2': ['cam3', 'cam1'], // 修正：添加cam1
            'cam3': ['cam1', 'cam6'],
            'cam6': ['cam3'],
            'cam1': ['office'], // 大门，只能进办公室
            'office': [] // 到达办公室，游戏结束
        };

        // 每个摄像头的邻近房间（用于sound吸引）- 完整的双向连接
        this.adjacentRooms = {
            'cam11': ['cam7', 'cam8'],
            'cam9': ['cam7', 'cam10'],
            'cam10': ['cam9'],
            'cam8': ['cam11', 'cam7', 'cam5'],
            'cam7': ['cam11', 'cam8', 'cam9', 'cam4'],
            'cam4': ['cam7', 'cam2', 'cam5', 'cam3'], // 修正：添加cam3
            'cam5': ['cam8', 'cam4', 'cam6'],
            'cam2': ['cam4', 'cam3', 'cam1'], // 修正：添加cam1
            'cam3': ['cam2', 'cam1', 'cam6', 'cam4'], // 修正：添加cam4
            'cam6': ['cam5', 'cam3'],
            'cam1': ['cam3', 'cam2'], // 修正：添加cam2（不包括office，因为那是终点）
        };

        // 每个摄像头的角色位置配置（CSS定位）
        this.characterPositions = {
            'cam11': { left: '57.1%', bottom: '0%', width: '29%', transform: 'translateX(-50%) rotate(0deg)' },
            'cam10': { left: '73.8%', bottom: '1.6%', width: '89.2%', transform: 'translateX(-50%) rotate(0deg)' },
            'cam1': { left: '39.9%', bottom: '35.3%', width: '38.8%', transform: 'translateX(-50%) rotate(0deg)' },
            'cam9': { left: '18.5%', bottom: '0%', width: '29.6%', transform: 'translateX(-50%) rotate(0deg)' },
            'cam8': { left: '96.1%', bottom: '0%', width: '29.6%', transform: 'translateX(-50%) rotate(-23deg)' },
            'cam7': { left: '49.7%', bottom: '0%', width: '29.6%', transform: 'translateX(-50%) rotate(-5deg)' },
            'cam6': { left: '16.6%', bottom: '0%', width: '29.6%', transform: 'translateX(-50%) rotate(-5deg)' },
            'cam5': { left: '71.1%', bottom: '0%', width: '29.6%', transform: 'translateX(-50%) rotate(-5deg)' },
            'cam4': { left: '91.4%', bottom: '6.8%', width: '66.9%', transform: 'translateX(-50%) rotate(-5deg)' },
            'cam3': { left: '7.4%', bottom: '5%', width: '66.9%', transform: 'translateX(-50%) rotate(-5deg)' },
            'cam2': { left: '39.6%', bottom: '27.7%', width: '37.8%', transform: 'translateX(-50%) rotate(-139deg)' },
        };

        // 角色明暗度配置（百分比）
        this.characterBrightness = {
            'cam11': 100,
            'cam10': 100,
            'cam1': 22,
            'cam9': 8,
            'cam8': 9,
            'cam7': 9,
            'cam6': 9,
            'cam5': 7,
            'cam4': 65,
            'cam3': 30,
            'cam2': 8,
        };

        // 角色旋转配置（度数）
        this.characterRotation = {
            'cam11': 0,
            'cam10': 0,
            'cam1': 0,
            'cam9': 0,
            'cam8': -23,
            'cam7': -5,
            'cam6': -5,
            'cam5': -5,
            'cam4': -5,
            'cam3': -5,
            'cam2': -139,
        };

        // 电眼特效配置（Night 6 特殊夜晚）- 坐标相对于EP图片
        this.lightningEyesConfig = {
            'cam11': {
                eye1: { left: '46.3%', top: '14.8%', width: '10%', height: '10%' },
                eye2: { left: '54.2%', top: '13.8%', width: '10%', height: '10%' }
            },
            'cam10': {
                eye1: { left: '37.0%', top: '41.7%', width: '10%', height: '10%' },
                eye2: { left: '38.7%', top: '43.5%', width: '10%', height: '10%' }
            },
            'cam1': {
                eye1: { left: '47.7%', top: '41.6%', width: '10%', height: '10%' },
                eye2: { left: '49.9%', top: '42.3%', width: '10%', height: '10%' }
            },
            'cam9': {
                eye1: { left: '46.8%', top: '15.1%', width: '10%', height: '10%' },
                eye2: { left: '54.7%', top: '14.1%', width: '10%', height: '10%' }
            },
            'cam8': {
                eye1: { left: '47.1%', top: '15.8%', width: '10%', height: '10%' },
                eye2: { left: '53.9%', top: '15.3%', width: '10%', height: '10%' }
            },
            'cam7': {
                eye1: { left: '46.3%', top: '15.6%', width: '10%', height: '10%' },
                eye2: { left: '54.2%', top: '13.6%', width: '10%', height: '10%' }
            },
            'cam6': {
                eye1: { left: '46.8%', top: '15.4%', width: '10%', height: '10%' },
                eye2: { left: '53.7%', top: '14.5%', width: '10%', height: '10%' }
            },
            'cam5': {
                eye1: { left: '52.2%', top: '21.3%', width: '10%', height: '10%' },
                eye2: { left: '62.0%', top: '23.1%', width: '10%', height: '10%' }
            },
            'cam4': {
                eye1: { left: '37.1%', top: '42.4%', width: '10%', height: '10%' },
                eye2: { left: '38.4%', top: '43.6%', width: '10%', height: '10%' }
            },
            'cam3': {
                eye1: { left: '47.7%', top: '41.4%', width: '10%', height: '10%' },
                eye2: { left: '50.0%', top: '42.5%', width: '10%', height: '10%' }
            },
            'cam2': {
                eye1: { left: '46.1%', top: '15.3%', width: '10%', height: '10%' },
                eye2: { left: '53.9%', top: '14.3%', width: '10%', height: '10%' }
            }
        };

        // 特朗普的位置配置（使用调试工具设置）
        this.trumpPositions = {
            'cam10': { left: '10%', bottom: '0%', width: '40%', transform: 'translateX(-50%) rotate(0deg)' },
            'cam11': { left: '38.2%', bottom: '0%', width: '40%', transform: 'translateX(-50%) rotate(0deg)' },
            'cam9': { left: '0%', bottom: '34.6%', width: '13.9%', transform: 'translateX(-50%) rotate(44deg)' },
            'cam8': { left: '1.5%', bottom: '24.5%', width: '20.1%', transform: 'translateX(-50%) rotate(58deg)' },
            'cam7': { left: '7.4%', bottom: '0%', width: '41.4%', transform: 'translateX(-50%) rotate(1deg)' },
            'cam6': { left: '86.3%', bottom: '0%', width: '41.4%', transform: 'translateX(-50%) rotate(1deg)' },
            'cam5': { left: '0%', bottom: '0%', width: '29.3%', transform: 'translateX(-50%) rotate(1deg)' },
            'cam1': { left: '10.8%', bottom: '15%', width: '31.6%', transform: 'translateX(-50%) rotate(1deg)' },
            'cam2': { left: '77.2%', bottom: '32.3%', width: '31.6%', transform: 'translateX(-50%) rotate(1deg)' },
            'cam3': { left: '100%', bottom: '21.4%', width: '32.9%', transform: 'translateX(-50%) rotate(-62deg)' },
            'cam4': { left: '11%', bottom: '0%', width: '31.6%', transform: 'translateX(-50%) rotate(1deg)' },
        };

        // 特朗普的明暗度配置
        this.trumpBrightness = {
            'cam10': 31,
            'cam11': 100,
            'cam9': 29,
            'cam8': 28,
            'cam7': 28,
            'cam6': 28,
            'cam5': 12,
            'cam1': 40,
            'cam2': 31,
            'cam3': 19,
            'cam4': 31,
        };

        // 特朗普的旋转配置
        this.trumpRotation = {
            'cam10': 0,
            'cam11': 0,
            'cam9': 44,
            'cam8': 58,
            'cam7': 1,
            'cam6': 1,
            'cam5': 1,
            'cam1': 1,
            'cam2': 1,
            'cam3': -62,
            'cam4': 1,
        };
    }

    // 开始AI循环
    start() {
        console.log(`🎮 EnemyAI.start() called for Night ${this.game.state.currentNight}`);

        // 根据夜数加载配置并设置AI等级
        this.loadAIConfig();

        console.log(`Night ${this.game.state.currentNight} - Epstein AI Config:`, this.currentEpsteinConfig);
        console.log(`Epstein will spawn in ${this.currentEpsteinConfig.spawnDelay / 1000} seconds...`);

        // 根据配置延迟后EP出场（如果AI等级>0）
        if (this.epstein.aiLevel > 0) {
            const spawnTimer = setTimeout(() => {
                console.log(`⏰ Spawn timer triggered after ${this.currentEpsteinConfig.spawnDelay}ms`);
                this.spawnEpstein();
            }, this.currentEpsteinConfig.spawnDelay);

            console.log(`⏰ Spawn timer created:`, spawnTimer);
        } else {
            console.log('Epstein AI level is 0, not spawning');
        }

        // Trump出场逻辑
        if (this.currentTrumpConfig && this.trump.aiLevel > 0) {
            console.log(`Night ${this.game.state.currentNight} - Trump AI Config:`, this.currentTrumpConfig);
            console.log(`Trump will spawn in ${this.currentTrumpConfig.spawnDelay / 1000} seconds...`);

            // 根据配置延迟后Trump出场
            setTimeout(() => {
                this.spawnTrump();
            }, this.currentTrumpConfig.spawnDelay);
        }

        // Hawking激活逻辑
        // Custom Night: 根据自定义等级决定是否激活
        if (this.game.state.customNight && this.game.state.customAILevels.hawking > 0) {
            console.log('Custom Night: Hawking activated at cam6!');
            this.startHawking();
        }
        // 普通夜晚：Night 3-5 激活
        else if (!this.game.state.customNight && this.game.state.currentNight >= 3 && this.game.state.currentNight <= 5) {
            console.log('Hawking activated at cam6!');
            this.startHawking();
        }
    }

    // 加载AI配置
    loadAIConfig() {
        const night = this.game.state.currentNight;

        // Custom Night (Night 7) - 使用自定义AI等级
        if (this.game.state.customNight && night === 7) {
            const customLevels = this.game.state.customAILevels;

            // Epstein 自定义配置
            this.currentEpsteinConfig = {
                aiLevel: customLevels.epstein,
                movementInterval: [9000, 10000],
                movementDuration: 1000,
                spawnDelay: 0,
                movementProbability: {
                    forward: 0.9,
                    lateral: 0.1,
                    backward: 0.0
                },
                soundLureResistance: 0.15
            };
            this.epstein.aiLevel = customLevels.epstein;
            this.epstein.movementInterval = this.getRandomInterval(this.currentEpsteinConfig.movementInterval);

            // Trump 自定义配置
            if (customLevels.trump > 0) {
                this.currentTrumpConfig = {
                    aiLevel: customLevels.trump,
                    movementInterval: [8000, 9000],
                    movementDuration: 1000,
                    spawnDelay: 0,
                    movementProbability: {
                        forward: 0.8,
                        lateral: 0.2,
                        backward: 0.0
                    },
                    ventCrawling: {
                        cam1Probability: 1.0,
                        cam2Probability: 0.5,
                        soundDelay: 5000,
                        soundDuration: 10000,
                        totalDuration: 20000,
                        retreatDelay: 2000,
                        retreatSoundDuration: 3000
                    }
                };
                this.trump.aiLevel = customLevels.trump;
                this.trump.movementInterval = this.getRandomInterval(this.currentTrumpConfig.movementInterval);
            } else {
                this.currentTrumpConfig = null;
            }

            // Hawking 自定义配置（通过 customAILevels.hawking 控制）
            // Hawking 的 AI 等级不影响移动，只影响是否激活

            console.log(`Custom Night AI Config loaded:`);
            console.log(`- Epstein: Level ${this.epstein.aiLevel}`);
            console.log(`- Trump: Level ${this.trump.aiLevel || 0}`);
            console.log(`- Hawking: Level ${customLevels.hawking}`);

            return;
        }

        // 普通夜晚配置
        // 加载Epstein配置
        this.currentEpsteinConfig = this.epsteinConfig[night] || this.epsteinConfig[1];
        this.epstein.aiLevel = this.currentEpsteinConfig.aiLevel;
        this.epstein.movementInterval = this.getRandomInterval(this.currentEpsteinConfig.movementInterval);

        // 加载Trump配置（Night 2-5）
        if (night >= 2 && night <= 5) {
            this.currentTrumpConfig = this.trumpConfig[night] || this.trumpConfig[2];
            this.trump.aiLevel = this.currentTrumpConfig.aiLevel;
            this.trump.movementInterval = this.getRandomInterval(this.currentTrumpConfig.movementInterval);
        } else {
            this.currentTrumpConfig = null; // Night 6 没有 Trump
        }

        console.log(`AI Config loaded for Night ${night}`);
        console.log(`- Epstein: Level ${this.epstein.aiLevel}, Interval ${this.epstein.movementInterval}ms`);
        if (this.currentTrumpConfig) {
            console.log(`- Trump: Level ${this.trump.aiLevel}, Interval ${this.trump.movementInterval}ms`);
        } else {
            console.log(`- Trump: Not active this night`);
        }
    }

    // 从区间中随机选择一个间隔时间
    getRandomInterval(intervalConfig) {
        // 如果是数组，从区间中随机选择
        if (Array.isArray(intervalConfig)) {
            const [min, max] = intervalConfig;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        // 如果是数字，直接返回
        return intervalConfig;
    }

    // EP出场
    spawnEpstein() {
        if (this.epstein.hasSpawned) return;

        this.epstein.hasSpawned = true;
        console.log('✅ Epstein has spawned!');

        // 第一关触发摄像头故障，第二关及以后不触发
        if (this.game.state.currentNight === 1) {
            this.triggerCameraFailure();
        }

        // 开始移动检查循环
        this.startMovementLoop();
    }

    // Trump出场
    spawnTrump() {
        if (this.trump.hasSpawned) return;

        this.trump.hasSpawned = true;
        console.log('Trump has spawned at cam10!');

        // 立即更新摄像头显示（如果摄像头打开）
        if (this.game.state.cameraOpen) {
            this.updateCameraDisplay();
        }

        // 开始Trump的移动检查循环
        this.startTrumpMovementLoop();
    }

    // 停止AI
    stop() {
        if (this.epstein.movementTimer) {
            clearTimeout(this.epstein.movementTimer);  // 改为 clearTimeout
            this.epstein.movementTimer = null;
        }
        if (this.trump.movementTimer) {
            clearTimeout(this.trump.movementTimer);    // 改为 clearTimeout
            this.trump.movementTimer = null;
        }
        if (this.trump.crawlingTimer) {
            clearTimeout(this.trump.crawlingTimer);
            this.trump.crawlingTimer = null;
        }
        if (this.trump.retreatTimer) {
            clearTimeout(this.trump.retreatTimer);
            this.trump.retreatTimer = null;
        }
        if (this.hawking.timer) {
            clearTimeout(this.hawking.timer);
            this.hawking.timer = null;
        }
        if (this.hawking.warningTimer) {
            clearTimeout(this.hawking.warningTimer);
            this.hawking.warningTimer = null;
        }
        if (this.hawking.attackTimer) {
            clearTimeout(this.hawking.attackTimer);
            this.hawking.attackTimer = null;
        }
        // 停止爬行音效
        this.game.assets.stopSound('ventCrawling');
        // 隐藏霍金警告
        this.hideHawkingWarning();
    }

    // 开始移动检查循环
    startMovementLoop() {
        // 使用 setTimeout 而不是 setInterval，以支持动态间隔
        const scheduleNextCheck = () => {
            // Night 4特殊机制：4AM后EP变得更激进
            let currentConfig = this.currentEpsteinConfig;
            if (this.game.state.currentNight === 4 && this.game.state.currentTime >= 4) {
                // 4AM后使用更激进的配置
                currentConfig = {
                    ...this.currentEpsteinConfig,
                    movementInterval: [8000, 10000],
                    movementProbability: {
                        forward: 1.0,
                        lateral: 0.0,
                        backward: 0.0
                    }
                };
            }

            // 从配置区间中随机选择下一次检查的间隔
            const nextInterval = this.getRandomInterval(currentConfig.movementInterval);

            this.epstein.movementTimer = setTimeout(() => {
                this.checkMovement();
                // 递归调度下一次检查
                scheduleNextCheck();
            }, nextInterval);
        };

        // 开始第一次调度
        scheduleNextCheck();
    }

    // 开始Trump的移动检查循环
    startTrumpMovementLoop() {
        // 使用 setTimeout 而不是 setInterval，以支持动态间隔
        const scheduleNextCheck = () => {
            // Night 5特殊机制：4AM后Trump变得更激进
            let currentConfig = this.currentTrumpConfig;
            if (this.game.state.currentNight === 5 && this.game.state.currentTime >= 4) {
                // 4AM后使用更激进的配置
                currentConfig = {
                    ...this.currentTrumpConfig,
                    movementInterval: [6000, 7000], // 6-7秒间隔
                    movementProbability: {
                        forward: 1.0,
                        lateral: 0.0,
                        backward: 0.0
                    }
                };
            }

            // 从配置区间中随机选择下一次检查的间隔
            const nextInterval = this.getRandomInterval(currentConfig.movementInterval);

            this.trump.movementTimer = setTimeout(() => {
                this.checkTrumpMovement();
                // 递归调度下一次检查
                scheduleNextCheck();
            }, nextInterval);
        };

        // 开始第一次调度
        scheduleNextCheck();
    }

    // 检查是否移动（FNAF机制）
    checkMovement() {
        // 如果还未出场，不移动
        if (!this.epstein.hasSpawned) return;

        // 如果AI等级为0，不移动
        if (this.epstein.aiLevel === 0) return;

        // 如果已经在办公室，不再移动
        if (this.epstein.currentLocation === 'office') return;

        // Custom Night 使用 1-24，普通夜晚使用 1-20
        const maxRandom = (this.game.state.customNight && this.game.state.currentNight === 7) ? 24 : 20;
        const randomNumber = Math.floor(Math.random() * maxRandom) + 1;

        // 如果随机数 <= AI等级，移动成功
        if (randomNumber <= this.epstein.aiLevel) {
            this.moveToNextLocation();
        }
    }

    // 检查Trump是否移动
    checkTrumpMovement() {
        // 如果还未出场，不移动
        if (!this.trump.hasSpawned) return;

        // 如果AI等级为0，不移动
        if (this.trump.aiLevel === 0) return;

        // 如果已经在办公室，不再移动
        if (this.trump.currentLocation === 'office') return;

        // Custom Night 使用 1-24，普通夜晚使用 1-20
        const maxRandom = (this.game.state.customNight && this.game.state.currentNight === 7) ? 24 : 20;
        const randomNumber = Math.floor(Math.random() * maxRandom) + 1;

        // 如果随机数 <= AI等级，移动成功
        if (randomNumber <= this.trump.aiLevel) {
            this.moveTrumpToNextLocation();
        }
    }

    // 移动到下一个位置（支持前进、平移、后退）
    moveToNextLocation() {
        const currentLoc = this.epstein.currentLocation;
        const currentDepth = this.locationDepth[currentLoc];

        // Night 4特殊机制：4AM后EP变得更激进
        let config = this.currentEpsteinConfig;
        if (this.game.state.currentNight === 4 && this.game.state.currentTime >= 4) {
            config = {
                ...this.currentEpsteinConfig,
                movementProbability: {
                    forward: 1.0,
                    lateral: 0.0,
                    backward: 0.0
                }
            };
            // 只在第一次触发时显示日志
            if (!this.epstein.night4AggressiveMode) {
                console.log('⚡ Night 4: 4AM reached! EP is now in aggressive mode (forward only)');
                this.epstein.night4AggressiveMode = true;
            }
        }

        // 获取所有位置（不限于邻居）
        const allLocations = Object.keys(this.locationDepth).filter(loc =>
            loc !== 'office' && loc !== currentLoc
        );

        // 获取邻近房间
        const adjacentLocs = this.adjacentRooms[currentLoc] || [];

        // 分类所有可能的移动位置
        // 前进：所有步长减1的位置（不限于邻近）
        const forwardLocations = allLocations.filter(loc => this.locationDepth[loc] === currentDepth - 1);
        // 平移：只能移动到邻近房间且步长相同的位置
        const lateralLocations = adjacentLocs.filter(loc => this.locationDepth[loc] === currentDepth);
        // 后退：只能移动到邻近房间且步长加1的位置
        const backwardLocations = adjacentLocs.filter(loc => this.locationDepth[loc] === currentDepth + 1);

        // 如果当前步长是1且没有前进位置，尝试移动到office
        if (forwardLocations.length === 0 && currentDepth === 1) {
            console.log(`Epstein moved: ${currentLoc} -> office`);
            this.epstein.currentLocation = 'office';
            this.triggerJumpscare('epstein');
            return;
        }

        // 根据配置概率决定移动方向
        const movementProb = config.movementProbability;
        const totalProb = movementProb.forward + movementProb.lateral + movementProb.backward;

        // 如果总概率为0或没有任何可移动位置，不移动
        if (totalProb === 0 || (forwardLocations.length === 0 && lateralLocations.length === 0 && backwardLocations.length === 0)) {
            console.log(`Epstein has no valid path from ${currentLoc}`);
            return;
        }

        // 归一化概率（确保总和为1）
        const normalizedProb = {
            forward: movementProb.forward / totalProb,
            lateral: movementProb.lateral / totalProb,
            backward: movementProb.backward / totalProb
        };

        // 根据概率选择移动方向
        const random = Math.random();
        let selectedLocations = [];
        let movementType = '';

        if (random < normalizedProb.forward && forwardLocations.length > 0) {
            // 前进
            selectedLocations = forwardLocations;
            movementType = 'forward';
        } else if (random < normalizedProb.forward + normalizedProb.lateral && lateralLocations.length > 0) {
            // 平移
            selectedLocations = lateralLocations;
            movementType = 'lateral';
        } else if (backwardLocations.length > 0) {
            // 后退
            selectedLocations = backwardLocations;
            movementType = 'backward';
        } else {
            // 如果选中的方向没有可用位置，回退到前进（默认行为）
            if (forwardLocations.length > 0) {
                selectedLocations = forwardLocations;
                movementType = 'forward (fallback)';
            } else if (lateralLocations.length > 0) {
                selectedLocations = lateralLocations;
                movementType = 'lateral (fallback)';
            } else if (backwardLocations.length > 0) {
                selectedLocations = backwardLocations;
                movementType = 'backward (fallback)';
            } else {
                console.log(`Epstein has no valid path from ${currentLoc}`);
                return;
            }
        }

        // 从选中的方向中随机选择一个位置
        const nextLocation = selectedLocations[Math.floor(Math.random() * selectedLocations.length)];

        console.log(`Epstein moved [${movementType}]: ${currentLoc} (depth ${currentDepth}) -> ${nextLocation} (depth ${this.locationDepth[nextLocation]})`);

        this.epstein.currentLocation = nextLocation;

        // 播放移动音效
        this.game.assets.playSound('blip', false, 0.5);

        // 如果到达办公室，触发游戏结束
        if (nextLocation === 'office') {
            this.triggerJumpscare('epstein');
            return;
        }

        // 如果摄像头打开且没有故障，无论查看哪个摄像头都播放动画
        if (this.game.state.cameraOpen && !this.game.state.cameraFailed) {
            this.game.camera.playMovementTransition();
        }

        // 更新摄像头显示
        this.updateCameraDisplay();
    }

    // Trump移动到下一个位置（支持前进、平移、后退）
    moveTrumpToNextLocation() {
        const currentLoc = this.trump.currentLocation;
        const currentDepth = this.trumpLocationDepth[currentLoc];

        // Night 5特殊机制：4AM后Trump变得更激进
        let config = this.currentTrumpConfig;
        if (this.game.state.currentNight === 5 && this.game.state.currentTime >= 4) {
            config = {
                ...this.currentTrumpConfig,
                movementProbability: {
                    forward: 1.0,
                    lateral: 0.0,
                    backward: 0.0
                },
                ventCrawling: {
                    ...this.currentTrumpConfig.ventCrawling,
                    cam1Probability: 1.0, // 4AM后在cam1必定爬行
                    cam2Probability: 0.8  // 4AM后在cam2有80%概率爬行
                }
            };
            // 只在第一次触发时显示日志
            if (!this.trump.night5AggressiveMode) {
                console.log('⚡ Night 5: 4AM reached! Trump is now in aggressive mode (faster + more crawling)');
                this.trump.night5AggressiveMode = true;
            }
        }

        // 如果正在爬行，不能移动
        if (this.trump.isCrawling) {
            console.log('Trump is crawling, cannot move');
            return;
        }

        // 如果在cam1，根据配置概率决定是否爬行
        if (currentLoc === 'cam1') {
            const shouldCrawl = Math.random() < config.ventCrawling.cam1Probability;
            if (shouldCrawl) {
                console.log(`Trump starting to crawl from ${currentLoc} to office (${config.ventCrawling.cam1Probability * 100}% chance)`);
                this.startTrumpCrawling(currentLoc);
                return;
            }
        }

        // 如果在cam2，根据配置概率决定是否爬行
        if (currentLoc === 'cam2') {
            const shouldCrawl = Math.random() < config.ventCrawling.cam2Probability;
            if (shouldCrawl) {
                console.log(`Trump decided to crawl from ${currentLoc} to office (${config.ventCrawling.cam2Probability * 100}% chance)`);
                this.startTrumpCrawling(currentLoc);
                return;
            } else {
                console.log(`Trump decided to continue moving from ${currentLoc} (${(1 - config.ventCrawling.cam2Probability) * 100}% chance)`);
                // 继续执行正常移动逻辑
            }
        }

        // 获取Trump可以去的位置
        const allLocations = Object.keys(this.trumpLocationDepth).filter(loc =>
            loc !== 'office' && loc !== currentLoc
        );

        // 获取邻近房间
        const adjacentLocs = this.adjacentRooms[currentLoc] || [];

        // 分类所有可能的移动位置
        // 前进：所有步长减1的位置（不限于邻近）
        const forwardLocations = allLocations.filter(loc => this.trumpLocationDepth[loc] === currentDepth - 1);
        // 平移：只能移动到邻近房间且步长相同的位置
        const lateralLocations = adjacentLocs.filter(loc => this.trumpLocationDepth[loc] === currentDepth);
        // 后退：只能移动到邻近房间且步长加1的位置
        const backwardLocations = adjacentLocs.filter(loc => this.trumpLocationDepth[loc] === currentDepth + 1);

        // 如果没有任何可移动位置，不移动
        if (forwardLocations.length === 0 && lateralLocations.length === 0 && backwardLocations.length === 0) {
            console.log(`Trump has no valid path from ${currentLoc}`);
            return;
        }

        // 根据配置概率决定移动方向
        const movementProb = config.movementProbability;
        const totalProb = movementProb.forward + movementProb.lateral + movementProb.backward;

        // 如果总概率为0，不移动
        if (totalProb === 0) {
            console.log(`Trump movement probability is 0`);
            return;
        }

        // 归一化概率
        const normalizedProb = {
            forward: movementProb.forward / totalProb,
            lateral: movementProb.lateral / totalProb,
            backward: movementProb.backward / totalProb
        };

        // 根据概率选择移动方向
        const random = Math.random();
        let selectedLocations = [];
        let movementType = '';

        if (random < normalizedProb.forward && forwardLocations.length > 0) {
            selectedLocations = forwardLocations;
            movementType = 'forward';
        } else if (random < normalizedProb.forward + normalizedProb.lateral && lateralLocations.length > 0) {
            selectedLocations = lateralLocations;
            movementType = 'lateral';
        } else if (backwardLocations.length > 0) {
            selectedLocations = backwardLocations;
            movementType = 'backward';
        } else {
            // 回退到可用的方向
            if (forwardLocations.length > 0) {
                selectedLocations = forwardLocations;
                movementType = 'forward (fallback)';
            } else if (lateralLocations.length > 0) {
                selectedLocations = lateralLocations;
                movementType = 'lateral (fallback)';
            } else if (backwardLocations.length > 0) {
                selectedLocations = backwardLocations;
                movementType = 'backward (fallback)';
            } else {
                console.log(`Trump has no valid path from ${currentLoc}`);
                return;
            }
        }

        // 从选中的方向中随机选择一个位置
        const nextLocation = selectedLocations[Math.floor(Math.random() * selectedLocations.length)];

        console.log(`Trump moved [${movementType}]: ${currentLoc} (depth ${currentDepth}) -> ${nextLocation} (depth ${this.trumpLocationDepth[nextLocation]})`);

        this.trump.currentLocation = nextLocation;

        // 播放移动音效
        this.game.assets.playSound('blip', false, 0.5);

        // 如果摄像头打开且没有故障，播放动画
        if (this.game.state.cameraOpen && !this.game.state.cameraFailed) {
            this.game.camera.playMovementTransition();
        }

        // 更新摄像头显示
        this.updateCameraDisplay();
    }

    // Trump开始爬行进入办公室
    startTrumpCrawling(fromLocation) {
        const config = this.currentTrumpConfig.ventCrawling;

        // 检查通风管是否已经关闭
        if (this.game.state.ventsClosed) {
            console.log('Trump tried to crawl but vents are already closed! Silent retreat.');

            // 静默撤退 - 不播放任何音效
            // 找出所有步长为3的位置
            const depth3Locations = Object.keys(this.trumpLocationDepth).filter(loc =>
                this.trumpLocationDepth[loc] === 3 && loc !== 'office'
            );

            // 如果没有步长为3的位置，使用EP的步长3位置
            let retreatLocation;
            if (depth3Locations.length > 0) {
                retreatLocation = depth3Locations[Math.floor(Math.random() * depth3Locations.length)];
            } else {
                const epDepth3Locations = Object.keys(this.locationDepth).filter(loc =>
                    this.locationDepth[loc] === 3 && loc !== 'office'
                );
                retreatLocation = epDepth3Locations[Math.floor(Math.random() * epDepth3Locations.length)];
            }

            console.log(`Trump silently retreats to ${retreatLocation} (depth 3)`);

            // 直接移动到撤退位置，不播放音效
            this.trump.currentLocation = retreatLocation;
            this.trump.isCrawling = false;
            this.trump.crawlingFrom = null;

            // 更新摄像头显示
            this.updateCameraDisplay();
            return;
        }

        this.trump.isCrawling = true;
        this.trump.crawlingFrom = fromLocation; // 记录从哪里开始爬行
        this.trump.currentLocation = 'crawling'; // 标记为爬行状态

        console.log(`Trump is crawling from ${fromLocation}...`);
        console.log(`Crawling config: soundDelay=${config.soundDelay}ms, soundDuration=${config.soundDuration}ms, totalDuration=${config.totalDuration}ms`);

        // 更新摄像头显示（Trump消失）
        this.updateCameraDisplay();

        // 根据配置延迟后开始播放爬行音效
        setTimeout(() => {
            // 检查Trump是否还在爬行（可能已经被阻止）
            if (this.trump.isCrawling && this.trump.currentLocation === 'crawling') {
                console.log('Playing crawling sound...');
                this.game.assets.playSound('ventCrawling', true, 1.0);

                // 根据配置持续时长后停止爬行音效
                setTimeout(() => {
                    if (this.trump.isCrawling && this.trump.currentLocation === 'crawling') {
                        console.log('Stopping crawling sound...');
                        this.game.assets.stopSound('ventCrawling');
                    }
                }, config.soundDuration);
            }
        }, config.soundDelay);

        // 根据配置总时长后到达办公室并触发跳杀
        this.trump.crawlingTimer = setTimeout(() => {
            console.log('Trump reached the office!');
            this.trump.currentLocation = 'office';
            this.trump.isCrawling = false;
            this.trump.crawlingFrom = null;

            // 停止爬行音效（如果还在播放）
            this.game.assets.stopSound('ventCrawling');

            // 触发跳杀
            this.triggerJumpscare('trump');
        }, config.totalDuration);
    }

    // 阻止Trump爬行（玩家关闭通风口）
    stopTrumpCrawling() {
        if (!this.trump.isCrawling) {
            return false;
        }

        const config = this.currentTrumpConfig.ventCrawling;

        console.log('Trump crawling blocked by closed vents!');

        // 清除爬行计时器
        if (this.trump.crawlingTimer) {
            clearTimeout(this.trump.crawlingTimer);
            this.trump.crawlingTimer = null;
        }

        // 停止爬行音效
        this.game.assets.stopSound('ventCrawling');

        // Trump被阻止，立即判定离开
        this.trump.isCrawling = false;

        // 找出所有步长为3的位置
        const depth3Locations = Object.keys(this.trumpLocationDepth).filter(loc =>
            this.trumpLocationDepth[loc] === 3 && loc !== 'office'
        );

        // 如果没有步长为3的位置，使用EP的步长3位置
        let retreatLocation;
        if (depth3Locations.length > 0) {
            // 随机选择一个步长为3的位置
            retreatLocation = depth3Locations[Math.floor(Math.random() * depth3Locations.length)];
        } else {
            // 使用EP的步长配置中的步长3位置
            const epDepth3Locations = Object.keys(this.locationDepth).filter(loc =>
                this.locationDepth[loc] === 3 && loc !== 'office'
            );
            retreatLocation = epDepth3Locations[Math.floor(Math.random() * epDepth3Locations.length)];
        }

        console.log(`Trump will retreat to ${retreatLocation} (depth 3)`);

        // 立即移动到撤退位置
        this.trump.currentLocation = retreatLocation;
        this.trump.crawlingFrom = null;

        // 更新摄像头显示
        this.updateCameraDisplay();

        // 根据配置延迟后播放撤退音效
        setTimeout(() => {
            console.log('Playing retreat crawling sound...');
            this.game.assets.playSound('ventCrawling', false, 1.0);

            // 根据配置持续时长后停止音效
            setTimeout(() => {
                this.game.assets.stopSound('ventCrawling');
            }, config.retreatSoundDuration);
        }, config.retreatDelay);

        return true;
    }

    // 检查通风口状态变化（从Game.js调用）
    onVentsChanged(ventsClosed) {
        // 如果Trump正在爬行且玩家关闭了通风口，阻止Trump
        if (this.trump.isCrawling && ventsClosed) {
            this.stopTrumpCrawling();
        }
    }

    // 使用sound吸引敌人（从CameraSystem调用）
    attractToSound(soundLocation) {
        let epAttracted = false;
        let trumpAttracted = false;

        // 尝试吸引EP
        const epCurrentLoc = this.epstein.currentLocation;
        const adjacentToEp = this.adjacentRooms[epCurrentLoc];

        if (this.epstein.hasSpawned && adjacentToEp && adjacentToEp.includes(soundLocation)) {
            // 根据配置检查是否抵抗sound吸引
            const resistance = this.currentEpsteinConfig.soundLureResistance;
            if (resistance > 0) {
                const failChance = Math.random();
                if (failChance < resistance) {
                    console.log(`Epstein resisted the sound lure! (${resistance * 100}% chance on Night ${this.game.state.currentNight})`);
                    // 吸引失败，但仍然播放音效让玩家以为成功了
                    this.game.assets.playSound('blip', false, 0.5);
                    return false; // 返回false表示没有真正吸引到
                }
            }

            // 吸引成功，EP移动到sound位置（可以前进或后退）
            const currentDepth = this.locationDepth[epCurrentLoc];
            const soundDepth = this.locationDepth[soundLocation];
            console.log(`Epstein attracted by sound: ${epCurrentLoc} (depth ${currentDepth}) -> ${soundLocation} (depth ${soundDepth})`);

            this.epstein.currentLocation = soundLocation;

            // 播放移动音效
            this.game.assets.playSound('blip', false, 0.5);

            // 如果到达办公室，触发游戏结束
            if (soundLocation === 'office') {
                this.triggerJumpscare('epstein');
            }

            epAttracted = true;
        } else {
            console.log(`Sound at ${soundLocation} is not adjacent to Epstein at ${epCurrentLoc}`);
        }

        // 尝试吸引Trump（如果已出场且不在爬行状态）
        const trumpCurrentLoc = this.trump.currentLocation;
        const adjacentToTrump = this.adjacentRooms[trumpCurrentLoc];

        if (this.trump.hasSpawned && !this.trump.isCrawling && adjacentToTrump && adjacentToTrump.includes(soundLocation)) {
            // 吸引成功，Trump移动到sound位置（可以前进或后退）
            const currentDepth = this.trumpLocationDepth[trumpCurrentLoc];
            const soundDepth = this.trumpLocationDepth[soundLocation];
            console.log(`Trump attracted by sound: ${trumpCurrentLoc} (depth ${currentDepth}) -> ${soundLocation} (depth ${soundDepth})`);

            this.trump.currentLocation = soundLocation;

            // 播放移动音效（如果EP没有播放）
            if (!epAttracted) {
                this.game.assets.playSound('blip', false, 0.5);
            }

            // 如果到达办公室，触发游戏结束
            if (soundLocation === 'office') {
                this.triggerJumpscare('trump');
            }

            trumpAttracted = true;
        } else if (this.trump.hasSpawned && !this.trump.isCrawling) {
            console.log(`Sound at ${soundLocation} is not adjacent to Trump at ${trumpCurrentLoc}`);
        }

        // 注意：不在这里更新显示，由CameraSystem的动画处理

        return epAttracted || trumpAttracted;
    }

    // 触发摄像头故障
    triggerCameraFailure() {
        console.log('Camera system failure!');
        this.game.state.cameraFailed = true;

        // 播放静态噪音
        this.game.assets.playSound('static', true, 1.0);

        // 如果摄像头打开，立即显示故障效果
        if (this.game.state.cameraOpen) {
            this.game.camera.showCameraFailure();
        }
        // 如果摄像头没打开，下次打开时会自动显示故障效果（在open()方法中）
    }

    // 更新摄像头显示
    updateCameraDisplay() {
        // 直接调用 CameraSystem 的显示方法
        if (this.game.camera) {
            this.game.camera.updateCharacterDisplay();
        }
    }

    // 触发跳杀
    triggerJumpscare(enemy = 'epstein') {
        console.log(`JUMPSCARE by ${enemy}!`);
        this.stop();

        // 霍金的特殊跳杀动画
        if (enemy === 'hawking') {
            this.triggerHawkingMissileJumpscare();
            return;
        }

        // 停止所有音效
        this.game.assets.stopSound('vents');
        this.game.assets.stopSound('static');

        // 创建跳杀动画容器
        const jumpscareContainer = document.createElement('div');
        jumpscareContainer.id = 'jumpscare-container';
        jumpscareContainer.style.position = 'fixed';
        jumpscareContainer.style.top = '0';
        jumpscareContainer.style.left = '0';
        jumpscareContainer.style.width = '100%';
        jumpscareContainer.style.height = '100%';
        jumpscareContainer.style.display = 'flex';
        jumpscareContainer.style.alignItems = 'center';
        jumpscareContainer.style.justifyContent = 'center';
        jumpscareContainer.style.zIndex = '99999';
        jumpscareContainer.style.overflow = 'hidden';

        // 创建办公室背景
        const officeBackground = document.createElement('img');
        officeBackground.src = this.game.assets.images.office.src;
        officeBackground.style.position = 'absolute';
        officeBackground.style.top = '0';
        officeBackground.style.left = '0';
        officeBackground.style.width = '100%';
        officeBackground.style.height = '100%';
        officeBackground.style.objectFit = 'cover';
        officeBackground.style.zIndex = '1';

        // 创建跳杀图片（居中显示）
        const jumpscareImg = document.createElement('img');
        // 根据敌人选择跳杀图片
        if (enemy === 'trump') {
            jumpscareImg.src = this.game.assets.images.trumpJumpscare?.src || this.game.assets.images.jumpscare.src;
        } else if (enemy === 'hawking') {
            jumpscareImg.src = this.game.assets.images.hawkingJumpscare?.src || this.game.assets.images.jumpscare.src;
        } else {
            jumpscareImg.src = this.game.assets.images.jumpscare.src;
        }
        jumpscareImg.style.position = 'absolute';
        jumpscareImg.style.top = '50%';
        jumpscareImg.style.left = '50%';
        jumpscareImg.style.transform = 'translate(-50%, -50%)';
        jumpscareImg.style.width = '25%'; // 初始大小25%
        jumpscareImg.style.height = 'auto';
        jumpscareImg.style.zIndex = '2';
        jumpscareImg.style.transition = 'none';

        jumpscareContainer.appendChild(officeBackground);
        jumpscareContainer.appendChild(jumpscareImg);
        document.body.appendChild(jumpscareContainer);

        // 播放跳杀音效
        if (enemy === 'hawking') {
            this.game.assets.playSound('hawkingJumpscare', false, 1.0);
        } else {
            this.game.assets.playSound('jumpscare', false, 1.0);
        }

        // 第1帧：25% (立即显示)
        // 已经设置

        // 第2帧：50% (0.15秒后)
        setTimeout(() => {
            jumpscareImg.style.width = '50%';
        }, 150);

        // 第3帧：100% (0.3秒后)
        setTimeout(() => {
            jumpscareImg.style.width = '100%';
        }, 300);

        // 1.5秒后淡出并显示游戏结束画面
        setTimeout(() => {
            jumpscareContainer.style.transition = 'opacity 0.5s';
            jumpscareContainer.style.opacity = '0';

            setTimeout(() => {
                document.body.removeChild(jumpscareContainer);
                this.game.gameOver('GAME OVER');
            }, 500);
        }, 1500);
    }

    // 获取当前位置
    getCurrentLocation() {
        return this.epstein.currentLocation;
    }

    // 获取当前EP的图片（根据夜数选择是否带电眼）
    getCurrentImage(cam, night) {
        if (night === 6 && this.characterImagesNight6[cam]) {
            return this.characterImagesNight6[cam];
        }
        return this.characterImages[cam];
    }

    // 获取Trump当前位置
    getTrumpCurrentLocation() {
        return this.trump.currentLocation;
    }

    // 检查Trump是否正在爬行
    isTrumpCrawling() {
        return this.trump.isCrawling;
    }

    // 重置AI
    reset() {
        this.stop();

        // 重置 Epstein
        this.epstein.currentLocation = 'cam11';
        this.epstein.aiLevel = 0;
        this.epstein.hasMovedOnce = false;
        this.epstein.hasSpawned = false;
        this.epstein.night4AggressiveMode = false; // 重置Night 4激进模式标志
        if (this.epstein.timer) {
            clearTimeout(this.epstein.timer);
            this.epstein.timer = null;
        }

        // 重置 Trump
        this.trump.currentLocation = 'cam10';
        this.trump.aiLevel = 0;
        this.trump.hasSpawned = false;
        this.trump.isCrawling = false;
        this.trump.crawlingFrom = null;
        this.trump.night5AggressiveMode = false; // 重置Night 5激进模式标志
        if (this.trump.timer) {
            clearTimeout(this.trump.timer);
            this.trump.timer = null;
        }
        if (this.trump.crawlingTimer) {
            clearTimeout(this.trump.crawlingTimer);
            this.trump.crawlingTimer = null;
        }
        if (this.trump.retreatTimer) {
            clearTimeout(this.trump.retreatTimer);
            this.trump.retreatTimer = null;
        }

        // 重置 Hawking
        this.hawking.active = false;
        this.hawking.warningLevel = 0;
        if (this.hawking.timer) {
            clearTimeout(this.hawking.timer);
            this.hawking.timer = null;
        }
        if (this.hawking.warningTimer) {
            clearTimeout(this.hawking.warningTimer);
            this.hawking.warningTimer = null;
        }
        if (this.hawking.attackTimer) {
            clearTimeout(this.hawking.attackTimer);
            this.hawking.attackTimer = null;
        }
        this.hideHawkingWarning();

        // 清除所有角色显示
        const characterOverlay = document.getElementById('character-overlay');
        if (characterOverlay) {
            characterOverlay.innerHTML = '';
        }

        console.log('EnemyAI reset complete');
    }

    // 启动霍金机制
    startHawking() {
        this.hawking.active = true;
        this.hawking.warningLevel = 0;
        console.log('Hawking started at cam6');

        // 根据AI等级计算警告时间
        // AI等级越高，警告时间越短（更难）
        // AI 1-5: 30秒 → 黄色
        // AI 6-10: 25秒 → 黄色
        // AI 11-15: 20秒 → 黄色
        // AI 16-20: 18秒 → 黄色
        let initialWarningTime = 30000; // 默认30秒

        if (this.game.state.customNight && this.game.state.currentNight === 7) {
            const hawkingLevel = this.game.state.customAILevels.hawking;
            if (hawkingLevel >= 16) {
                initialWarningTime = 18000; // 18秒
            } else if (hawkingLevel >= 11) {
                initialWarningTime = 20000; // 20秒
            } else if (hawkingLevel >= 6) {
                initialWarningTime = 25000; // 25秒
            } else {
                initialWarningTime = 30000; // 30秒
            }
            console.log(`Hawking AI Level ${hawkingLevel}: Initial warning in ${initialWarningTime/1000}s`);
        } else {
            // 普通夜晚使用默认20秒
            initialWarningTime = 20000;
        }

        // X秒后开始黄色警告
        this.hawking.timer = setTimeout(() => {
            this.showHawkingWarning('yellow');
        }, initialWarningTime);
    }

    // 显示霍金警告
    showHawkingWarning(level) {
        if (!this.hawking.active) return;

        console.log(`Hawking warning: ${level}`);

        // 根据AI等级计算警告升级时间
        // AI等级越高，警告升级越快（更难）
        let yellowToRedTime = 5000; // 默认5秒
        let redToBreakTime = 5000;  // 默认5秒

        if (this.game.state.customNight && this.game.state.currentNight === 7) {
            const hawkingLevel = this.game.state.customAILevels.hawking;
            if (hawkingLevel >= 16) {
                yellowToRedTime = 3000; // 3秒
                redToBreakTime = 3000;  // 3秒
            } else if (hawkingLevel >= 11) {
                yellowToRedTime = 4000; // 4秒
                redToBreakTime = 4000;  // 4秒
            } else if (hawkingLevel >= 6) {
                yellowToRedTime = 5000; // 5秒
                redToBreakTime = 5000;  // 5秒
            } else {
                yellowToRedTime = 6000; // 6秒
                redToBreakTime = 6000;  // 6秒
            }
        }

        if (level === 'yellow') {
            this.hawking.warningLevel = 1;
            this.updateHawkingWarningDisplay();

            // X秒后升级为红色警告
            this.hawking.warningTimer = setTimeout(() => {
                this.showHawkingWarning('red');
            }, yellowToRedTime);
        } else if (level === 'red') {
            this.hawking.warningLevel = 2;
            this.updateHawkingWarningDisplay();

            // X秒后摄像头坏掉
            this.hawking.warningTimer = setTimeout(() => {
                this.hawkingBreakCamera();
            }, redToBreakTime);
        }
    }

    // 更新霍金警告显示
    updateHawkingWarningDisplay() {
        let warningIcon = document.getElementById('hawking-warning-icon');

        if (!warningIcon) {
            warningIcon = document.createElement('img');
            warningIcon.id = 'hawking-warning-icon';
            warningIcon.style.position = 'absolute';
            warningIcon.style.zIndex = '1000';
            warningIcon.style.display = 'block';
            warningIcon.style.animation = 'flash 0.5s infinite';

            // 根据摄像头状态决定添加到哪里
            if (this.game.state.cameraOpen) {
                const cameraGrid = document.getElementById('camera-grid');
                if (cameraGrid) {
                    cameraGrid.appendChild(warningIcon);
                }
            } else {
                document.body.appendChild(warningIcon);
            }
        }

        // 根据摄像头状态决定位置和大小
        if (this.game.state.cameraOpen) {
            // 摄像头打开：在地图上 cam6 右边，使用相对于地图的百分比定位
            // cam6 位置: x: 77.2%, y: 82.2%, width: 13.0%, height: 8.0%
            // 警告图标放在 cam6 右边
            warningIcon.style.position = 'absolute';
            warningIcon.style.left = '91%'; // 77.2% + 13.0% + 小间距
            warningIcon.style.top = '82.2%';
            warningIcon.style.width = '11.2%'; // 8% * 1.4 = 11.2%
            warningIcon.style.height = 'auto';
            warningIcon.style.transform = 'none';

            // 确保在地图容器中
            const cameraGrid = document.getElementById('camera-grid');
            if (cameraGrid && warningIcon.parentElement !== cameraGrid) {
                cameraGrid.appendChild(warningIcon);
            }
        } else {
            // 摄像头关闭：在风扇标志（氧气显示）左边，使用 fixed 定位
            warningIcon.style.position = 'fixed';
            warningIcon.style.left = 'auto';
            warningIcon.style.right = 'calc(2vw + 15vw)'; // 氧气显示右边距 + 氧气显示宽度 + 间距
            warningIcon.style.top = 'auto';
            warningIcon.style.bottom = '2vh';
            warningIcon.style.width = '3vw';
            warningIcon.style.height = 'auto';
            warningIcon.style.transform = 'none';

            // 确保在 body 中
            if (warningIcon.parentElement !== document.body) {
                document.body.appendChild(warningIcon);
            }
        }

        // 设置警告图片
        if (this.hawking.warningLevel === 1) {
            warningIcon.src = '/assets/images/Warninglight.png';
        } else if (this.hawking.warningLevel === 2) {
            warningIcon.src = '/assets/images/Warningheavy.png';
        }
    }

    // 隐藏霍金警告
    hideHawkingWarning() {
        const warningIcon = document.getElementById('hawking-warning-icon');
        if (warningIcon) {
            warningIcon.remove();
        }
    }

    // 霍金破坏摄像头
    hawkingBreakCamera() {
        console.log('Hawking broke the camera!');

        // 隐藏警告
        this.hideHawkingWarning();

        // 摄像头坏掉
        this.triggerCameraFailure();

        // 霍金从cam6消失
        this.hawking.active = false;
        this.updateCameraDisplay();

        // 4秒后跳杀
        this.hawking.attackTimer = setTimeout(() => {
            this.triggerJumpscare('hawking');
        }, 4000);
    }

    // 霍金的导弹跳杀动画
    triggerHawkingMissileJumpscare() {
        console.log('Hawking missile jumpscare!');

        // 停止所有音效
        this.game.assets.stopSound('vents');
        this.game.assets.stopSound('static');

        // 创建跳杀动画容器
        const jumpscareContainer = document.createElement('div');
        jumpscareContainer.id = 'jumpscare-container';
        jumpscareContainer.style.position = 'fixed';
        jumpscareContainer.style.top = '0';
        jumpscareContainer.style.left = '0';
        jumpscareContainer.style.width = '100%';
        jumpscareContainer.style.height = '100%';
        jumpscareContainer.style.zIndex = '99999';
        jumpscareContainer.style.overflow = 'hidden';
        jumpscareContainer.style.backgroundColor = '#000';

        // 创建办公室背景
        const officeBackground = document.createElement('img');
        officeBackground.src = this.game.assets.images.office.src;
        officeBackground.style.position = 'absolute';
        officeBackground.style.top = '0';
        officeBackground.style.left = '0';
        officeBackground.style.width = '100%';
        officeBackground.style.height = '100%';
        officeBackground.style.objectFit = 'cover';
        officeBackground.style.zIndex = '1';

        // 创建霍金图片（在房间里）
        const hawkingImg = document.createElement('img');
        hawkingImg.src = '/assets/images/mrstephen.png';
        hawkingImg.style.position = 'absolute';
        hawkingImg.style.left = '43.6%';
        hawkingImg.style.bottom = '27.4%';
        hawkingImg.style.width = '30%';
        hawkingImg.style.height = 'auto';
        hawkingImg.style.zIndex = '2';
        hawkingImg.style.filter = 'brightness(0.68) contrast(1) saturate(1)';

        // 创建导弹图片（从霍金位置飞向玩家）
        const missileImg = document.createElement('img');
        missileImg.src = '/assets/images/front.png';
        missileImg.style.position = 'absolute';
        missileImg.style.left = '25%';
        missileImg.style.top = '40%';
        missileImg.style.width = '5%';
        missileImg.style.height = 'auto';
        missileImg.style.zIndex = '3';
        missileImg.style.transition = 'all 1s ease-out';

        // 创建爆炸帧图容器（初始隐藏）
        const explosionImg = document.createElement('div');
        explosionImg.style.position = 'absolute';
        explosionImg.style.top = '50%';
        explosionImg.style.left = '50%';
        explosionImg.style.transform = 'translate(-50%, -50%)';
        explosionImg.style.width = '50vw'; // 容器宽度
        explosionImg.style.height = '50vh'; // 容器高度
        explosionImg.style.zIndex = '4';
        explosionImg.style.backgroundImage = 'url(/assets/images/exp2.png)';
        explosionImg.style.backgroundSize = '400% auto'; // 4列，高度自适应
        explosionImg.style.backgroundRepeat = 'no-repeat';
        explosionImg.style.backgroundPosition = '0% 0%';
        explosionImg.style.display = 'none';

        jumpscareContainer.appendChild(officeBackground);
        jumpscareContainer.appendChild(hawkingImg);
        jumpscareContainer.appendChild(missileImg);
        jumpscareContainer.appendChild(explosionImg);
        document.body.appendChild(jumpscareContainer);

        // 播放霍金跳杀音效
        this.game.assets.playSound('hawkingJumpscare', false, 1.0);

        // 导弹飞向玩家（放大并移动到中心）
        setTimeout(() => {
            missileImg.style.left = '50%';
            missileImg.style.top = '50%';
            missileImg.style.transform = 'translate(-50%, -50%)';
            missileImg.style.width = '80%';
        }, 50);

        // 1秒后导弹到达，开始爆炸动画
        setTimeout(() => {
            missileImg.style.display = 'none';
            explosionImg.style.display = 'block';

            // 播放爆炸帧动画（使用第一列的4帧，原图是4列3行）
            let frame = 0;
            const totalFrames = 3; // 0-3共4帧
            const frameInterval = 80; // 每帧80ms

            // 第一列的4帧对应的Y位置（手动调整后的精确位置）
            const yPositions = [8.00, 36.50, 65.00, 93.00];

            const animateExplosion = setInterval(() => {
                // X位置固定在0%（第一列），Y位置使用预设数组
                explosionImg.style.backgroundPosition = `0% ${yPositions[frame]}%`;

                frame++;
                if (frame > totalFrames) {
                    clearInterval(animateExplosion);

                    // 爆炸动画结束后淡出
                    setTimeout(() => {
                        jumpscareContainer.style.transition = 'opacity 0.5s';
                        jumpscareContainer.style.opacity = '0';

                        setTimeout(() => {
                            document.body.removeChild(jumpscareContainer);
                            this.game.gameOver('GAME OVER');
                        }, 500);
                    }, 200);
                }
            }, frameInterval);
        }, 1000);
    }

    // 电击霍金（玩家点击按钮）
    shockHawking() {
        if (!this.hawking.active) {
            console.log('Hawking is not active');
            return false;
        }

        console.log('Hawking shocked! Resetting timer...');

        // 清除所有计时器
        if (this.hawking.timer) {
            clearTimeout(this.hawking.timer);
            this.hawking.timer = null;
        }
        if (this.hawking.warningTimer) {
            clearTimeout(this.hawking.warningTimer);
            this.hawking.warningTimer = null;
        }
        if (this.hawking.attackTimer) {
            clearTimeout(this.hawking.attackTimer);
            this.hawking.attackTimer = null;
        }

        // 重置警告等级
        this.hawking.warningLevel = 0;
        this.hideHawkingWarning();

        // 播放电击音效
        this.game.assets.playSound('hawking_shock', false, 0.8);

        // 根据AI等级计算重置后的警告时间
        let resetWarningTime = 20000; // 默认20秒

        if (this.game.state.customNight && this.game.state.currentNight === 7) {
            const hawkingLevel = this.game.state.customAILevels.hawking;
            if (hawkingLevel >= 16) {
                resetWarningTime = 18000; // 18秒
            } else if (hawkingLevel >= 11) {
                resetWarningTime = 20000; // 20秒
            } else if (hawkingLevel >= 6) {
                resetWarningTime = 25000; // 25秒
            } else {
                resetWarningTime = 30000; // 30秒
            }
        }

        // X秒后重新开始警告
        this.hawking.timer = setTimeout(() => {
            this.showHawkingWarning('yellow');
        }, resetWarningTime);

        return true;
    }
}
