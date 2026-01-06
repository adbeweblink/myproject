
import React, { useState, useEffect, useRef } from 'react';
import { KPIMetric } from '../types';
import { TrendingUp, Users, Target, Globe } from 'lucide-react';

const AnimatedNumber = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Easing function: outExpo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentCount = Math.floor(easeProgress * numericValue);
          
          setDisplayValue(currentCount);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue, hasAnimated]);

  return <span ref={ref}>{displayValue.toLocaleString()}{suffix}</span>;
};

export const KPIDashboard: React.FC = () => {
  const stats = [
    { value: "50,000+", label: "年度行銷觸及名單 (MQLs)", sub: "High-Intent Pipeline", color: "from-blue-600 to-cyan-500", icon: Target },
    { value: "26,000+", label: "EDM 商業用戶訂閱", sub: "Active Subscribers", color: "from-yellow-600 to-orange-500", icon: Globe },
    { value: "117,000+", label: "LINE 創意社群好友", sub: "Creative Community", color: "from-green-600 to-emerald-500", icon: Users },
    { value: "600+", label: "全台經銷合作夥伴", sub: "Active SI Partners", color: "from-purple-600 to-pink-500", icon: TrendingUp },
  ];

  return (
    <section className="h-screen py-10 px-6 md:px-20 border-b border-white/5 bg-black relative overflow-hidden flex flex-col justify-center">
      {/* Background radial gradient for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* KPI SCANLINE ANIMATION */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="w-full h-1 bg-white/20 absolute top-0 animate-[scan_8s_linear_infinite]"></div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>

      <div className="text-center mb-12 relative z-10 shrink-0">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400">行銷運營數據現況</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-base">
          累積至今的數位資產與社群動能，是 FY26 驅動業務潛在商機成長的基石
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 w-full max-w-7xl mx-auto">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white/[0.03] border border-white/10 p-6 md:p-8 rounded-[1.5rem] overflow-hidden hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 backdrop-blur-md"
          >
            {/* Glow Effect on Hover */}
            <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`}></div>
            
            <div className="relative z-10">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                <stat.icon size={20} />
              </div>
              
              <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">
                <AnimatedNumber value={stat.value} />
              </div>
              
              <div className="text-white font-bold mb-1 group-hover:text-blue-400 transition-colors text-sm md:text-base">{stat.label}</div>
              <div className="text-gray-500 text-[9px] uppercase tracking-[0.2em] font-medium">{stat.sub}</div>
            </div>
            
            {/* Corner Accent */}
            <div className={`absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl ${stat.color} opacity-10 group-hover:opacity-30 transition-opacity clip-path-polygon-[100%_0,100%_100%,0_100%]`}></div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600 font-mono text-[9px] uppercase tracking-[0.5em] opacity-50 shrink-0">
        Real-time Marketing Intelligence System v2.0
      </div>
    </section>
  );
};
