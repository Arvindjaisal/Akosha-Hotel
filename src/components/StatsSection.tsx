import { useState, useEffect, useRef } from 'react';
import { stats } from '../data/hotelData.js';

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, started, index }: { stat: any; started: boolean; index: number }) {
  const isDecimal = !Number.isInteger(stat.value);
  const countTarget = isDecimal ? stat.value * 10 : stat.value;
  const rawCount = useCountUp(countTarget, 2000, started);
  const displayVal = isDecimal ? (rawCount / 10).toFixed(1) : rawCount.toLocaleString();

  return (
    <div
      className="text-center p-8 border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all duration-500 reveal-up"
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="text-[#C9A84C] font-serif font-bold mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
        {displayVal}{stat.suffix}
      </div>
      <div className="text-white/50 text-sm tracking-[0.2em] uppercase">{stat.label}</div>
      <div className="gold-line mx-auto mt-4" />
    </div>
  );
}

export default function StatsSection() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setStarted(true);
            entry.target.querySelectorAll('.reveal-up')
              .forEach(el => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="stats-section py-20 relative">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal-up">
          <div className="section-badge justify-center">Our Numbers</div>
          <h2 className="section-title text-white">
            Excellence in <span className="text-gold-gradient">Every Number</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-[#C9A84C]/10">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} started={started} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
