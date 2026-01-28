
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Zap, 
  Image as ImageIcon, 
  Film, 
  ShieldCheck, 
  GraduationCap,
  Library
} from 'lucide-react';

export const LineContentShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      icon: Film,
      category: "Real-time Updates",
      title: "最迅速的在地化新聞",
      desc: "打破語言隔閡，我們第一時間翻譯並解析全球 Adobe 技術發表，轉化為台灣設計圈最關心的在地化快訊。",
      color: "bg-red-600",
      stats: "每週更新"
    },
    {
      id: 2,
      icon: ImageIcon,
      category: "Event Connect",
      title: "在地近期活動佈達",
      desc: "整合全台實體研討會、線上直播與快充學堂報名資訊。精準鎖定您所在城市的創意盛會。",
      color: "bg-blue-600",
      stats: "活動第一線"
    },
    {
      id: 3,
      icon: Zap,
      category: "Analysis & Report",
      title: "在地化產品比較整理",
      desc: "針對台灣企業常見的軟硬體組合，提供最貼近實際使用情境的橫向評測。包含 AI 效能比對、版本差異分析。",
      color: "bg-yellow-500",
      stats: "採購必讀"
    },
    {
      id: 4,
      icon: ShieldCheck,
      category: "Tech Support",
      title: "AI 智能技術支援協助",
      desc: "遇到 AI 功能無法啟動或資安合規疑問？我們的專欄提供模組化的疑難排解與技術導引。",
      color: "bg-green-600",
      stats: "創意守護"
    },
    {
      id: 5,
      icon: GraduationCap,
      category: "Weblink Academy",
      title: "快充學堂精選筆記",
      desc: "將長達 2 小時的直播課程濃縮成 5 張重點圖卡。讓您在通勤碎片時間就能掌握大師級的核心技巧。",
      color: "bg-purple-600",
      stats: "精華回顧"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getSlideStyle = (index: number) => {
    const diff = (index - activeIndex + slides.length) % slides.length;
    let distance = index - activeIndex;
    if (distance > slides.length / 2) distance -= slides.length;
    if (distance < -slides.length / 2) distance += slides.length;

    const isActive = distance === 0;
    const isPrev = distance === -1;
    const isNext = distance === 1;

    let transform = 'scale(0.8) translateX(0) translateZ(-100px) rotateY(0deg)';
    let opacity = 0.3;
    let zIndex = 0;
    let pointerEvents = 'none';

    if (isActive) {
      transform = 'scale(1) translateX(0) translateZ(0) rotateY(0deg)';
      opacity = 1;
      zIndex = 10;
      pointerEvents = 'auto';
    } else if (isPrev) {
      transform = 'scale(0.85) translateX(-60%) translateZ(-50px) rotateY(15deg)';
      opacity = 0.6;
      zIndex = 5;
    } else if (isNext) {
      transform = 'scale(0.85) translateX(60%) translateZ(-50px) rotateY(-15deg)';
      opacity = 0.6;
      zIndex = 5;
    }

    return { transform, opacity, zIndex, pointerEvents };
  };

  // Keyboard navigation for 3D Carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const section = document.getElementById('community-details');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= -window.innerHeight / 2 && rect.bottom <= window.innerHeight * 1.5;
      if (isVisible) {
        if (e.key === 'ArrowLeft') prevSlide();
        else if (e.key === 'ArrowRight') nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="min-h-screen py-10 px-6 md:px-20 border-b border-white/5 bg-[#0e0e0e] flex flex-col justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs tracking-widest uppercase mb-3">
             <Library size={12} /> Knowledge Base
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-3">
            不僅是即時快訊，<br/>更是<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06C755] to-emerald-400">深度知識庫</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Weblink 官方帳號收錄了 5 大核心內容板塊，將繁雜的技術文件轉化為易讀的行動版白皮書。
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-[380px] w-full max-w-4xl mx-auto flex items-center justify-center perspective-[1000px]">
          
          {slides.map((slide, index) => {
            const style = getSlideStyle(index);
            const Icon = slide.icon;
            
            return (
              <div
                key={slide.id}
                className="absolute w-[280px] md:w-[350px] transition-all duration-500 ease-out"
                style={{
                  ...style,
                  // @ts-ignore
                  pointerEvents: style.pointerEvents,
                  zIndex: style.zIndex,
                }}
              >
                <div className={`
                  bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 h-[360px] flex flex-col shadow-2xl
                  ${index === activeIndex ? 'shadow-[0_0_50px_rgba(6,199,85,0.1)] border-[#06C755]/30 ring-1 ring-[#06C755]/20' : ''}
                `}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${slide.color} text-white shadow-lg`}>
                      <Icon size={24} />
                    </div>
                    <span className="bg-white/10 text-gray-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/5">
                      {slide.stats}
                    </span>
                  </div>

                  <div className="text-[#06C755] text-[10px] font-bold tracking-widest uppercase mb-1">
                    {slide.category}
                  </div>
                  <h3 className="text-xl font-black text-white mb-2 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-xs flex-1 line-clamp-4">
                    {slide.desc}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-white font-bold text-xs group cursor-pointer hover:text-[#06C755] transition-colors">
                    <span>閱讀範例文章</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:left-2 z-20 p-2 md:p-3 rounded-full bg-black/50 border border-white/10 hover:bg-[#06C755] hover:border-[#06C755] hover:text-white text-gray-400 transition-all backdrop-blur-md"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 md:right-2 z-20 p-2 md:p-3 rounded-full bg-black/50 border border-white/10 hover:bg-[#06C755] hover:border-[#06C755] hover:text-white text-gray-400 transition-all backdrop-blur-md"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-6 relative z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`
                w-1.5 h-1.5 rounded-full transition-all duration-300 
                ${idx === activeIndex ? 'w-6 bg-[#06C755]' : 'bg-gray-700 hover:bg-gray-500'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
