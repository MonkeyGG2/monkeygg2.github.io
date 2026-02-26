// 静态噪点效果
class StaticNoise {
    constructor() {
        this.canvas = document.getElementById('static-canvas');
        if (!this.canvas) {
            console.error('Static canvas not found');
            return;
        }
        
        this.ctx = this.canvas.getContext('2d');
        this.isRunning = false;
        this.animationId = null;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.canvas.style.display = 'block';
        this.animate();
    }

    stop() {
        this.isRunning = false;
        this.canvas.style.display = 'none';
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    animate() {
        if (!this.ctx || !this.isRunning) return;
        
        const width = this.canvas.width;
        const height = this.canvas.height;
        const imageData = this.ctx.createImageData(width, height);
        const data = imageData.data;

        // 生成更强烈的随机噪点（电视雪花效果）
        for (let i = 0; i < data.length; i += 4) {
            const value = Math.random() > 0.5 ? 255 : 0;
            data[i] = value;
            data[i + 1] = value;
            data[i + 2] = value;
            data[i + 3] = Math.random() * 255;
        }

        this.ctx.putImageData(imageData, 0, 0);
        this.animationId = requestAnimationFrame(() => this.animate());
    }
}
