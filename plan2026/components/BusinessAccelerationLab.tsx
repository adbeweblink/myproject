import React, { useState, useMemo, useRef } from 'react';
import { 
  ExternalLink, 
  Wrench, 
  Gamepad2, 
  Target, 
  CheckCircle2, 
  Zap, 
  Heart, 
  Clock, 
  MousePointer2,
  FlaskConical,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { SectionHeading } from './ui/Shared';
import { LabProject } from '../types';

const LAB_PROJECTS: LabProject[] = [
  // --- Tools ---
  {
    id: 1, type: 'tool', title: "軟體採購規格生成器",
    description: "專為政府教育單位設計，一鍵生成合規採購硬體規格書。",
    link: "https://adbeweblink.github.io/myproject/adbespec2026.html",
    purpose: "自動產出合規標案規格文件。",
    problemSolved: "解決人工查閱規格耗時易錯。",
    efficiency: "撰寫時間縮短至30秒。"
  },
  {
    id: 2, type: 'tool', title: "Firefly 點數計算機",
    description: "整合官方與第三方模型費率，精準預估 AI 算力成本。",
    link: "https://adbeweblink.github.io/myproject/aipointcalculator.html",
    purpose: "協助團隊精算 AI 點數消耗預算。",
    problemSolved: "解決複雜模型費率難以計算。",
    efficiency: "三分鐘完成預算表。"
  },
  {
    id: 10, type: 'tool', title: "CC 最新功能電子報",
    description: "針對 A4 列印優化，前端即時生成 PDF，資訊零時差。",
    link: "https://adbeweblink.github.io/myproject/newfeatures.html",
    purpose: "提供標準化的一鍵生成功能週報。",
    problemSolved: "克服網頁轉存 PDF 排版錯亂。",
    efficiency: "即時渲染高解析度文件。"
  },
  {
    id: 13, type: 'tool', title: "台灣經銷商搜尋器",
    description: "整合全台經銷資料庫，支援地區篩選，快速媒合窗口。",
    link: "https://adbeweblink.github.io/myproject/reseller.html",
    purpose: "建立透明名錄，快速找到窗口。",
    problemSolved: "解決官方列表缺乏在地資訊。",
    efficiency: "秒速媒合服務商。"
  },
  {
    id: 4, type: 'tool', title: "企業方案規格比較",
    description: "專為 B2B 銷售設計，清晰呈現團隊與企業版差異。",
    link: "https://adbeweblink.github.io/myproject/cc-biz-matrix.html",
    purpose: "協助客戶釐清版本授權差異。",
    problemSolved: "解決授權規範難以理解。",
    efficiency: "自動化收集潛在商機。"
  },
  // --- Games ---
  {
    id: 15, type: 'game', title: "職場生存模擬器",
    description: "判定你的「真實身價」與「生存機率」。一場職場生存遊戲。",
    link: "https://adbeweblink.github.io/myproject/survivaltest.html",
    appeal: "將枯燥薪資計算轉化為共鳴遊戲。",
    stickiness: "透過毒雞湯引發轉發慾望。",
    features: "互動滑桿、診斷系統。"
  },
  {
    id: 14, type: 'game', title: "奧多比轉轉樂",
    description: "基於 Three.js 的 3D 魔術方塊，考驗空間邏輯。",
    link: "https://adbeweblink.github.io/myproject/twist.html",
    appeal: "結合經典魔術方塊，強化品牌印象。",
    stickiness: "競速解謎具高重玩性。",
    features: "WebGL 3D 渲染。"
  },
  {
    id: 7, type: 'game', title: "奧多比跳跳樂",
    description: "基於 Three.js 的 3D 蓄力跳躍，在軟體積木間精準跳躍。",
    link: "https://adbeweblink.github.io/myproject/jump.html",
    appeal: "沉浸式 3D 互動，建立認知。",
    stickiness: "蓄力手感與連擊機制。",
    features: "物理拋物線模擬。"
  },
  {
    id: 9, type: 'game', title: "奧多比合合樂",
    description: "類西瓜遊戲物理合成玩法，將圖示進化為高階圖示。",
    link: "https://adbeweblink.github.io/myproject/merge.html",
    appeal: "合成快感結合物理碰撞。",
    stickiness: "炸彈道具增加變數。",
    features: "Matter.js 物理引擎。"
  }
];

const PatternSvg: React.FC<{ id: number; color: string }> = ({ id, color }) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className={color}>
    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" />
    <path d="M0 50 Q 50 0 100 50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" />
  </svg>
);

export const BusinessAccelerationLab: React.FC = () => {
  const [filter, setFilter] = useState<'tool' | 'game'>('tool');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => LAB_PROJECTS.filter(p => p.type === filter), [filter]);

  const isTool = filter === 'tool';
  const accentColor = isTool ? 'from-blue-600' : 'from-orange-600';
  const textColor = isTool ? 'text-blue-400' : 'text-orange-400';

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -350 : 350,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`h-screen transition-colors duration-700 overflow-hidden flex flex-col justify-center ${isTool ? 'bg-[#0f0f0f]' : 'bg-[#1a0500]'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-20 shrink-0">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[9px] tracking-widest uppercase mb-2">
            <FlaskConical size={10} /> Lab Experiment
          </div>
          <h2 className={`text-3xl md:text-5xl font-black mb-3 transition-colors ${isTool ? 'text-white' : 'text-orange-50'}`}>
            {isTool ? '企業級生產力工具(Beta)' : '品牌互動遊戲體驗(Beta)'}
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            {isTool ? '解決商業流程痛點，提供自動化方案。' : '將品牌轉化為互動體驗，提升黏著度。'}
          </p>
        </div>

        <div className="flex items-center justify-between mb-8 gap-4">
          <div className="inline-flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
            <button 
              onClick={() => setFilter('tool')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-xs font-bold transition-all ${isTool ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Wrench size={16} /> 生產力工具
            </button>
            <button 
              onClick={() => setFilter('game')}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-xs font-bold transition-all ${!isTool ? 'bg-orange-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <Gamepad2 size={16} /> 互動小遊戲
            </button>
          </div>

          <div className="flex gap-2">
             <button onClick={() => scroll('left')} className="p-2 rounded-full border border-white/10 text-white hover:bg-white/10 transition"><ChevronLeft size={20} /></button>
             <button onClick={() => scroll('right')} className="p-2 rounded-full border border-white/10 text-white hover:bg-white/10 transition"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 px-6 md:px-20"
      >
        <div className="flex gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`
                snap-center shrink-0 w-[280px] md:w-[320px]
                bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col transition-all duration-300
                hover:border-white/30 hover:-translate-y-1
              `}
            >
              <div className={`h-24 relative overflow-hidden bg-gradient-to-br ${accentColor} to-black/80`}>
                <PatternSvg id={project.id} color="text-white" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-1 rounded-lg">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=${encodeURIComponent(project.link)}`} alt="QR" className="w-12 h-12" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <a href={project.link} target="_blank" className={`w-full py-2 rounded-lg font-bold text-xs text-center mb-4 flex items-center justify-center gap-1 ${isTool ? 'bg-blue-600' : 'bg-orange-600'} text-white`}>
                  開啟連結 <ArrowUpRight size={14} />
                </a>

                <h3 className="text-base font-bold text-white mb-2 truncate">{project.title}</h3>
                <p className="text-gray-500 text-[11px] leading-relaxed mb-4 h-8 line-clamp-2">{project.description}</p>

                <div className="mt-auto space-y-2 border-t border-white/5 pt-3">
                  {isTool ? (
                    <div className="grid grid-cols-1 gap-1.5">
                      <div className="flex gap-2 items-center">
                        <Zap size={12} className="text-yellow-500" />
                        <span className="text-[10px] text-blue-300 font-bold">{project.efficiency}</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Target size={12} className="text-gray-500" />
                        <span className="text-[10px] text-gray-500 truncate">{project.purpose}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-1.5">
                      <div className="flex gap-2 items-center">
                        <Clock size={12} className="text-orange-400" />
                        <span className="text-[10px] text-orange-200 font-bold">{project.stickiness}</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Heart size={12} className="text-gray-500" />
                        <span className="text-[10px] text-gray-500 truncate">{project.appeal}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};