import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布大小
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // 粒子类
    class Particle {
      x: number;
      y: number;
      size: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      color: string;
      type: string;
      angle: number;
      rotationSpeed: number;
      life: number;
      maxLife: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * (canvas?.width ?? window.innerWidth);
        this.y = Math.random() * (canvas?.height ?? window.innerHeight);
        this.size = Math.random() * 1.5 + 0.5;
        this.baseSize = this.size;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.life = 0;
        this.maxLife = 200 + Math.random() * 100;
        this.opacity = Math.random() * 0.4 + 0.3;
        
        // 随机选择颜色和效果
        const effects = [
          { color: 'rgba(139, 92, 246, ', type: 'star' },    // 紫色星星
          { color: 'rgba(236, 72, 153, ', type: 'circle' },  // 粉色圆圈
          { color: 'rgba(59, 130, 246, ', type: 'diamond' }, // 蓝色钻石
          { color: 'rgba(245, 158, 11, ', type: 'triangle' } // 金色三角
        ];
        
        const effect = effects[Math.floor(Math.random() * effects.length)];
        this.color = effect.color + this.opacity + ')';
        this.type = effect.type;
        this.angle = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.angle += this.rotationSpeed;
        this.life++;

        const width = canvas?.width ?? window.innerWidth;
        const height = canvas?.height ?? window.innerHeight;
        
        // 边界检查和重生
        if (this.x > width || this.x < 0 || this.y > height || this.y < 0 || this.life > this.maxLife) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.life = 0;
          this.opacity = Math.random() * 0.4 + 0.3;
          this.color = this.color.replace(/[\d.]+\)$/, this.opacity + ')');
        }

        // 粒子大小呼吸效果
        this.size = this.baseSize + Math.sin(Date.now() * 0.002) * 0.2;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.fillStyle = this.color;
        ctx.beginPath();

        switch (this.type) {
          case 'star':
            // 五角星
            for (let i = 0; i < 5; i++) {
              const angle = (i * 72) * Math.PI / 180;
              const x = Math.cos(angle) * this.size;
              const y = Math.sin(angle) * this.size;
              if (i === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            break;
          
          case 'circle':
            // 圆形
            ctx.arc(0, 0, this.size, 0, Math.PI * 2);
            break;
          
          case 'diamond':
            // 菱形
            ctx.moveTo(0, -this.size);
            ctx.lineTo(this.size, 0);
            ctx.lineTo(0, this.size);
            ctx.lineTo(-this.size, 0);
            break;
          
          case 'triangle':
            // 三角形
            ctx.moveTo(0, -this.size);
            ctx.lineTo(this.size, this.size);
            ctx.lineTo(-this.size, this.size);
            break;
        }

        ctx.closePath();
        ctx.fill();

        // 添加发光效果
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        ctx.fill();
        
        ctx.restore();
      }
    }

    // 创建粒子数组
    const particles: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push(new Particle());
    }

    // 鼠标交互
    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;
    let mouseTimeout: number;

    canvas.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      clearTimeout(mouseTimeout);
      mouseTimeout = window.setTimeout(() => {
        isMouseMoving = false;
      }, 100);
    });

    // 动画循环
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        if (isMouseMoving) {
          // 添加鼠标吸引/排斥效果
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const force = (120 - distance) / 120;
            const repel = Math.random() > 0.8; // 更倾向于吸引
            const factor = repel ? -1 : 1;
            particle.speedX += (dx / distance) * force * 0.1 * factor;
            particle.speedY += (dy / distance) * force * 0.1 * factor;
          }
        }

        // 添加阻力
        particle.speedX *= 0.99;
        particle.speedY *= 0.99;

        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      style={{
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default ParticleBackground;
