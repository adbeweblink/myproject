
import React, { useState, useEffect, useRef } from 'react';
import { Users, Target, Globe, ArrowRight, Filter, Zap, Database, TrendingUp } from 'lucide-react';
import { SectionHeading } from './ui/Shared';

// 動畫數字組件 (保留原本的動效)
const AnimatedNumber = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9,]/g, ''); // 修正 regex 以保留逗號格式習慣
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
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
  // 現有數據 (量變基礎)
  const rawStats = [
    { value: "118,000+", label: "LINE 社群好友", icon: Users, color: "text-green-400", bg: "bg-green-900/20" },
    { value: "50,000+", label: "年度行銷觸及", icon: Target, color: "text-blue-400", bg: "bg-blue-900/20" },
    { value: "26,000+", label: "EDM 訂閱用戶", icon: Globe, color: "text-yellow-400", bg: "bg-yellow-900/20" },
  ];

  return (
    <section className="min-h-screen py-10 pt-24 md:pt-10 px-6 md:px-20 border-b border-white/5 bg-[#050505] relative overflow-hidden flex flex-col justify-start md:justify-center" id="kpi">
      {/* 背景光暈 */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col h-full justify-center">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 shrink-0">
          <SectionHeading 
            title="行銷效益轉化漏斗" 
            subtitle="Visibility to Conversion" 
            color="bg-gradient-to-r from-blue-500 to-purple-500" 
          />
          <p className="text-gray-400 max-w-3xl mx-auto text-base mt-4 leading-relaxed">
            雖然實體活動席次有限，但在數位社群上的<span className="text-blue-400 font-bold">能見度與曝光</span>高達數千次點擊。
            FY26 透過 <span className="text-white font-bold">Lab 工具優勢</span> 篩選精準商業客戶，主要目標是協助經銷業務<span className="text-orange-400 font-bold">有效提升轉化率</span>。
          </p>
        </div>

        {/* 核心視覺：三階段漏斗 (Horizontal Flow) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative">
          
          {/* STEP 1: 龐大流量 (The Base) - 佔比 5/12 */}
          <div className="lg:col-span-5 relative group bg-gray-900/30 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md flex flex-col justify-center">
            <div className="absolute inset-0 bg-blue-900/5 rounded-3xl pointer-events-none"></div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-blue-900/20 text-blue-400 border border-blue-500/30">
                <Database size={20} />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">Step 1: 曝光與能見度 (Visibility)</h3>
            </div>

            {/* 數據卡片列表 */}
            <div className="space-y-4">
              {rawStats.map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 group-hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${stat.bg} ${stat.color}`}>
                      <stat.icon size={16} />
                    </div>
                    <span className="text-gray-400 text-sm font-medium">{stat.label}</span>
                  </div>
                  <span className="text-2xl font-black text-white tracking-tight">
                    <AnimatedNumber value={stat.value} />
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-[10px] text-gray-500 text-center font-mono">
              * 數千次有效點擊與資訊擴散
            </div>
          </div>

          {/* ARROW AREA (Desktop) - 佔比 1/12 */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center relative">
            <div className="w-full h-1 bg-gradient-to-r from-blue-900/50 to-purple-900/50 absolute top-1/2 -translate-y-1/2 -z-10"></div>
            <div className="p-3 rounded-full bg-[#0a0a0a] border border-white/20 text-gray-500 z-10 animate-pulse">
               <ArrowRight size={24} />
            </div>
          </div>

          {/* ARROW AREA (Mobile) */}
          <div className="lg:hidden flex justify-center py-2 text-gray-600">
             <ArrowRight size={24} className="rotate-90" />
          </div>

          {/* STEP 2: 質變機制 (The Filter) - 佔比 3/12 */}
          <div className="lg:col-span-3 relative group bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-purple-500/30 p-6 md:p-8 rounded-3xl backdrop-blur-md flex flex-col items-center text-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.05)]">
             <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Filter size={28} className="text-white" />
             </div>
             <h3 className="text-white font-bold mb-1">Step 2: Lab 優勢篩選</h3>
             <p className="text-purple-300 text-[10px] font-bold uppercase tracking-widest mb-4">Precision Filtering</p>
             
             <ul className="text-xs text-gray-300 space-y-3 text-left w-full pl-2">
                <li className="flex items-start gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"></span>
                   <span>透過<strong className="text-white">規格生成器</strong>篩選剛需</span>
                </li>
                <li className="flex items-start gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"></span>
                   <span>透過<strong className="text-white">成本試算</strong>鎖定預算客</span>
                </li>
                <li className="flex items-start gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"></span>
                   <span>排除無效贈品粉</span>
                </li>
             </ul>
          </div>

          {/* ARROW AREA (Desktop) - 佔比 1/12 */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center relative">
            <div className="w-full h-1 bg-gradient-to-r from-purple-900/50 to-orange-900/50 absolute top-1/2 -translate-y-1/2 -z-10"></div>
             <div className="p-3 rounded-full bg-[#0a0a0a] border border-white/20 text-gray-500 z-10 animate-pulse delay-150">
               <ArrowRight size={24} />
            </div>
          </div>

          {/* ARROW AREA (Mobile) */}
          <div className="lg:hidden flex justify-center py-2 text-gray-600">
             <ArrowRight size={24} className="rotate-90" />
          </div>

          {/* STEP 3: 商機變現 (The Gold) - 佔比 2/12 */}
          <div className="lg:col-span-2 relative group bg-gradient-to-b from-orange-900/20 to-red-900/20 border border-orange-500/40 p-6 rounded-3xl backdrop-blur-md flex flex-col items-center text-center justify-center">
             <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                <TrendingUp size={24} className="text-white" />
             </div>
             <h3 className="text-white font-bold text-sm mb-1">Step 3: 業務賦能</h3>
             <div className="text-[9px] font-bold text-orange-400 uppercase tracking-widest mb-3">Sales Enablement</div>
             
             <div className="bg-black/40 rounded-lg p-2 w-full border border-orange-500/20">
                <div className="text-xs text-gray-400 mb-1">成交轉化率</div>
                <div className="text-xl font-black text-white">有效提升</div>
             </div>
             <div className="mt-2 text-[9px] text-gray-500 leading-tight">
                *客戶直接聯繫經銷商<br/>Weblink 提供精準助攻
             </div>
          </div>

        </div>

        {/* 底部總結與防禦話術 */}
        <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
           <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md">
              <Zap size={16} className="text-yellow-400" />
              <span className="text-gray-300 text-xs md:text-sm">
                 FY26 策略：擴大左側 <span className="text-blue-400 font-bold">曝光能見度</span>，
                 利用中間 <span className="text-purple-400 font-bold">Lab 優勢篩選</span>，
                 最終協助業務 <span className="text-orange-400 font-bold">提升轉化</span>。
              </span>
           </div>
        </div>

      </div>
    </section>
  );
};
