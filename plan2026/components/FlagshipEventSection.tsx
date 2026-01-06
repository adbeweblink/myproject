
import React from 'react';
import { 
  Zap, 
  Box, 
  Users, 
  Mic2, 
  Layers, 
  Cpu, 
  Globe2 
} from 'lucide-react';
import { SectionHeading } from './ui/Shared';

export const FlagshipEventSection: React.FC = () => {

  return (
    <section className="h-screen pt-24 pb-8 md:pt-32 md:pb-10 px-6 md:px-20 border-b border-white/5 bg-[#0a0a0a] flex flex-col justify-center overflow-hidden">
      <div className="shrink-0 mb-6">
        <SectionHeading 
          title="年度旗艦盛會" 
          subtitle="Annual Flagship Events" 
          color="bg-gradient-to-r from-purple-500 to-pink-500" 
        />

        <div className="mb-6 hidden md:block">
          <p className="text-base md:text-lg text-gray-300 max-w-4xl leading-relaxed">
            Weblink 作為 Adobe 在台最重要的戰略執行夥伴，<strong className="text-white">策劃 (Curate) 並 執行 (Execute)</strong> 年度指標性盛會，
            這不僅是軟體發表，更是台灣創意產業的技術指標。
          </p>
        </div>
      </div>

      {/* Main Events Twin Towers Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 flex-1 min-h-0">
        
        {/* Event 1: First Half - Creator Solutions Day */}
        <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#111] hover:border-cyan-500/50 transition-all duration-500 flex flex-col h-full">
          {/* Background Image Layer */}
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop" 
            alt="Creator Solutions Day BG" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-700 pointer-events-none"
          />
          
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-cyan-900/20 to-transparent pointer-events-none group-hover:from-cyan-900/40 transition-all" />
          
          <div className="relative p-6 pb-12 md:p-8 flex flex-col h-full z-10">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-cyan-950/80 backdrop-blur-md text-cyan-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-cyan-800">
                1H 2026 • 上半年
              </span>
              <Layers className="text-cyan-500 group-hover:scale-110 transition-transform" size={24} />
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
              Creator <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solutions Day 2026</span>
            </h3>

            <p className="text-gray-400 mb-4 leading-relaxed text-xs md:text-sm line-clamp-3 md:line-clamp-none">
              聚焦<strong className="text-white">「跨界整合」</strong>與<strong className="text-white">「專案直擊」</strong>。
              打破 2D 平面與 3D 空間的界線，現場邀請知名工作室解構商業專案，展示如何運用 AI 多媒體解決方案提升產能。
            </p>

            <ul className="space-y-2 mt-auto">
              <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                <div className="bg-cyan-900/30 p-1.5 rounded text-cyan-400"><Box size={14} /></div>
                <span>2D/3D AI混合工作流實戰解析</span>
              </li>
              <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                <div className="bg-cyan-900/30 p-1.5 rounded text-cyan-400"><Users size={14} /></div>
                <span>雲端AI應用創意專案技術分享</span>
              </li>
              <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                <div className="bg-cyan-900/30 p-1.5 rounded text-cyan-400"><Cpu size={14} /></div>
                <span>工作站 (Workstation) 體驗區</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Event 2: Second Half - Creator Link */}
        <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#111] hover:border-red-500/50 transition-all duration-500 flex flex-col h-full">
          {/* Background Image Layer */}
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop" 
            alt="Creator Link BG" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-700 pointer-events-none"
          />

          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-red-900/20 to-transparent pointer-events-none group-hover:from-red-900/40 transition-all" />
          
          <div className="relative p-6 pb-12 md:p-8 flex flex-col h-full z-10">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-red-950/80 backdrop-blur-md text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-800">
                2H 2026 • 下半年
              </span>
              <Zap className="text-red-500 group-hover:scale-110 transition-transform" size={24} />
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
              Creator <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Link 2026</span>
            </h3>

            <p className="text-gray-400 mb-4 leading-relaxed text-xs md:text-sm line-clamp-3 md:line-clamp-none">
              適逢 <strong className="text-white">Adobe MAX 全球大會</strong>後，台灣首場大型技術發表會。
              直接空運 MAX 現場發表的「黑科技 (Sneaks)」，解密最新的 AI 模型與未來一年的創意趨勢。
            </p>

            <ul className="space-y-2 mt-auto">
              <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                <div className="bg-red-900/30 p-1.5 rounded text-red-400"><Globe2 size={14} /></div>
                <span>Adobe MAX Keynote 黑科技</span>
              </li>
              <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                <div className="bg-red-900/30 p-1.5 rounded text-red-400"><Mic2 size={14} /></div>
                <span>原廠專家與硬體大廠聯合開講</span>
              </li>
              <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
                <div className="bg-red-900/30 p-1.5 rounded text-red-400"><Layers size={14} /></div>
                <span>數百人規模實體交流</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
