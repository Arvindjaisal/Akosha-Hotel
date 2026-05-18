import { useEffect, useRef } from 'react';

export default function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    // Golden particles
    type Particle = {
      x: number; y: number; z: number;
      vx: number; vy: number; vz: number;
      r: number; alpha: number; speed: number;
    };

    const particles: Particle[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * W - W / 2,
      y: Math.random() * H - H / 2,
      z: Math.random() * 600 + 100,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      vz: -Math.random() * 0.8 - 0.2,
      r: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.6 + 0.1,
      speed: Math.random() * 0.5 + 0.2,
    }));

    let mx = 0, my = 0;
    const handleMouse = (e: MouseEvent) => {
      mx = (e.clientX - W / 2) / W;
      my = (e.clientY - H / 2) / H;
    };
    window.addEventListener('mousemove', handleMouse);

    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const FOV = 400;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      frame++;

      particles.forEach(p => {
        // Move
        p.z += p.vz;
        p.x += p.vx + mx * 0.5;
        p.y += p.vy + my * 0.5;

        // Reset if too close
        if (p.z < 1) {
          p.x = (Math.random() - 0.5) * W;
          p.y = (Math.random() - 0.5) * H;
          p.z = 600;
        }

        // 3D projection
        const scale = FOV / (FOV + p.z);
        const px = p.x * scale + W / 2;
        const py = p.y * scale + H / 2;
        const r = p.r * scale;

        if (px < 0 || px > W || py < 0 || py > H) {
          p.x = (Math.random() - 0.5) * W;
          p.y = (Math.random() - 0.5) * H;
          p.z = 600;
          return;
        }

        // Draw gold particle
        const alpha = p.alpha * scale;
        ctx.beginPath();
        ctx.arc(px, py, Math.max(r, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${alpha})`;
        ctx.fill();

        // Draw trails/lines between close particles
        particles.forEach(p2 => {
          if (p === p2) return;
          const scale2 = FOV / (FOV + p2.z);
          const px2 = p2.x * scale2 + W / 2;
          const py2 = p2.y * scale2 + H / 2;
          const dist = Math.hypot(px - px2, py - py2);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px2, py2);
            ctx.strokeStyle = `rgba(201, 168, 76, ${(1 - dist / 80) * 0.06})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Ambient rings
      const ringAlpha = 0.02 + Math.sin(frame * 0.01) * 0.01;
      for (let i = 0; i < 3; i++) {
        const r = 200 + i * 120 + Math.sin(frame * 0.005 + i) * 30;
        ctx.beginPath();
        ctx.arc(W / 2, H / 2, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(201, 168, 76, ${ringAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
      aria-hidden="true"
    />
  );
}
