"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
};

type TrailPoint = {
  x: number;
  y: number;
  life: number;
  maxLife: number;
};

const colors = ["#ff5a00", "#ff8b4a", "#ffc34d", "#ffdf7a"];

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const trail = useRef<TrailPoint[]>([]);
  const lastPoint = useRef({ x: -100, y: -100 });
  const currentPoint = useRef({ x: -100, y: -100, active: false });
  const lastDirection = useRef({ x: -0.9, y: -0.42 });
  const prefersReducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 250, damping: 28, mass: 0.35 });
  const ringY = useSpring(cursorY, { stiffness: 250, damping: 28, mass: 0.35 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!canvas || !context || !finePointer) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let raf = 0;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const addParticles = (x: number, y: number) => {
      const dx = x - lastPoint.current.x;
      const dy = y - lastPoint.current.y;
      const distance = Math.hypot(dx, dy);

      if (distance < 5) return;

      lastPoint.current = { x, y };
      lastDirection.current = { x: dx / distance, y: dy / distance };
      trail.current.push({ x, y, life: 28, maxLife: 28 });
      if (trail.current.length > 24) {
        trail.current.splice(0, trail.current.length - 24);
      }

      const count = Math.min(8, Math.max(3, Math.floor(distance / 14)));

      for (let index = 0; index < count; index += 1) {
        const angle = Math.atan2(dy, dx) + Math.PI + (Math.random() - 0.5) * 0.72;
        const speed = 1.2 + Math.random() * 2.8;

        particles.current.push({
          x: x - dx * Math.random() * 0.38,
          y: y - dy * Math.random() * 0.38,
          vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 0.55,
          vy: Math.sin(angle) * speed + (Math.random() - 0.5) * 0.55,
          life: 28 + Math.random() * 18,
          maxLife: 46,
          size: 2.2 + Math.random() * 4.4,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      if (particles.current.length > 190) {
        particles.current.splice(0, particles.current.length - 190);
      }
    };

    const addIdleParticle = () => {
      if (!currentPoint.current.active) return;

      const angle = Math.random() * Math.PI * 2;
      const radius = 10 + Math.random() * 16;
      const speed = 0.18 + Math.random() * 0.62;

      particles.current.push({
        x: currentPoint.current.x + Math.cos(angle) * radius,
        y: currentPoint.current.y + Math.sin(angle) * radius,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 22 + Math.random() * 15,
        maxLife: 38,
        size: 1.8 + Math.random() * 3.8,
        color: colors[Math.floor(Math.random() * colors.length)],
      });

      if (particles.current.length > 170) {
        particles.current.splice(0, particles.current.length - 170);
      }
    };

    const moveCursor = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      currentPoint.current = { x: event.clientX, y: event.clientY, active: true };
      addParticles(event.clientX, event.clientY);

      const target = event.target as HTMLElement | null;
      setHovered(Boolean(target?.closest("a, button, [data-cursor='magnetic']")));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      if (frame % 3 === 0) {
        addIdleParticle();
      }

      if (currentPoint.current.active) {
        const tailLength = 96;
        const startX = currentPoint.current.x - lastDirection.current.x * tailLength;
        const startY = currentPoint.current.y - lastDirection.current.y * tailLength;
        const gradient = context.createLinearGradient(startX, startY, currentPoint.current.x, currentPoint.current.y);
        gradient.addColorStop(0, "rgba(255, 169, 41, 0)");
        gradient.addColorStop(0.55, "rgba(255, 139, 22, 0.22)");
        gradient.addColorStop(1, "rgba(255, 90, 0, 0.72)");

        context.save();
        context.globalCompositeOperation = "lighter";
        context.lineCap = "round";
        context.shadowColor = "#ff8b16";
        context.shadowBlur = 22;
        context.strokeStyle = gradient;
        context.lineWidth = 9;
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(currentPoint.current.x, currentPoint.current.y);
        context.stroke();
        context.restore();

        context.save();
        context.globalCompositeOperation = "lighter";
        context.lineCap = "round";
        context.strokeStyle = "rgba(255, 224, 128, 0.36)";
        context.lineWidth = 3;
        context.beginPath();
        context.moveTo(startX + lastDirection.current.x * 22, startY + lastDirection.current.y * 22);
        context.lineTo(currentPoint.current.x, currentPoint.current.y);
        context.stroke();
        context.restore();
      }

      trail.current = trail.current.filter((point) => {
        point.life -= 1;
        return point.life > 0;
      });

      if (trail.current.length > 1) {
        for (let index = 1; index < trail.current.length; index += 1) {
          const previous = trail.current[index - 1];
          const point = trail.current[index];
          const progress = index / trail.current.length;
          const life = Math.min(previous.life / previous.maxLife, point.life / point.maxLife);
          const alpha = Math.max(0, life * progress * 0.42);

          context.save();
          context.globalCompositeOperation = "lighter";
          context.lineCap = "round";
          context.lineJoin = "round";
          context.shadowColor = "#ff8b16";
          context.shadowBlur = 18 * progress;
          context.strokeStyle = `rgba(255, 123, 18, ${alpha})`;
          context.lineWidth = 1.5 + progress * 6;
          context.beginPath();
          context.moveTo(previous.x, previous.y);
          context.lineTo(point.x, point.y);
          context.stroke();
          context.restore();

          context.save();
          context.globalCompositeOperation = "lighter";
          context.lineCap = "round";
          context.strokeStyle = `rgba(255, 224, 128, ${alpha * 0.62})`;
          context.lineWidth = 1 + progress * 3;
          context.beginPath();
          context.moveTo(previous.x, previous.y);
          context.lineTo(point.x, point.y);
          context.stroke();
          context.restore();
        }
      }

      particles.current = particles.current.filter((particle) => {
        particle.life -= 1;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.94;
        particle.vy *= 0.94;

        const progress = particle.life / particle.maxLife;
        if (progress <= 0) return false;

        context.save();
        context.globalCompositeOperation = "lighter";
        context.globalAlpha = Math.min(1, progress * 1.35);
        context.translate(particle.x, particle.y);
        context.rotate(frame * 0.025 + particle.size);
        context.fillStyle = particle.color;
        context.shadowColor = particle.color;
        context.shadowBlur = 14;
        context.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        context.restore();

        return true;
      });

      if (currentPoint.current.active) {
        const gradient = context.createRadialGradient(
          currentPoint.current.x,
          currentPoint.current.y,
          2,
          currentPoint.current.x,
          currentPoint.current.y,
          34
        );
        gradient.addColorStop(0, "rgba(255, 148, 33, 0.55)");
        gradient.addColorStop(0.42, "rgba(255, 190, 69, 0.22)");
        gradient.addColorStop(1, "rgba(255, 90, 0, 0)");

        context.save();
        context.globalCompositeOperation = "lighter";
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(currentPoint.current.x, currentPoint.current.y, 34, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }

      frame += 1;
      raf = requestAnimationFrame(draw);
    };

    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", moveCursor);
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [cursorX, cursorY, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="custom-cursor pointer-events-none fixed inset-0 z-[1200] hidden"
      />
      <motion.div
        aria-hidden="true"
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[1202] -ml-1.5 -mt-1.5 hidden h-3 w-3 rounded-full bg-[var(--color-text)]"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        aria-hidden="true"
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[1201] -ml-4 -mt-4 hidden h-8 w-8 rounded-full border-2 border-[var(--color-text)] bg-transparent"
        animate={{
          scale: hovered ? 1.45 : pressed ? 0.72 : 1,
          opacity: hovered ? 0.82 : 0.92,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}
