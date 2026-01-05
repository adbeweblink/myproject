
import React from 'react';
import { 
  Zap, 
  Box, 
  Users, 
  Mic2, 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  Globe2 
} from 'lucide-react';
import { SectionHeading } from './ui/Shared';

export const FlagshipEventSection: React.FC = () => {
  const pastEvents = [
    { title: "Creator Link 2025", url: "https://adbedistr.weblink.com.tw/creatorlink2025-141" },
    { title: "2024 Adobe 用戶盛會", url: "https://motioner.tw/news/2024Adobe%E7%94%A8%E6%88%B6%E7%9A%84%E5%B9%B4%E5%BA%A6%E5%89%B5%E6%84%8F%E7%9B%9B%E6%9C%83?srsltid=AfmBOooWmj7q61ynmSpX3NXyZBsRIC_XOV5OW1TZOZKUdyDJKcI_4QR6" },
    { title: "Weblink x Adobe 經銷大會", url: "https://adbedistr.weblink.com.tw/91" },
    { title: "2023 創意解決方案日", url: "https://adbedistr.weblink.com.tw/30" },
  ];

  return (
    <section className="min-h-screen py-20 px-6 md:px-20 border-b border-white/5 bg-[#0a0a0a] flex flex-col justify-center">
      <SectionHeading 
        title="年度旗艦盛會" 
        subtitle="Annual Flagship Events" 
        color="bg-gradient-to-r from-purple-500 to-pink-500" 
      />

      <div className="mb-12">
        <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
          Weblink 作為 Adobe 在台最重要的戰略執行夥伴，<strong className="text-white">策劃 (Curate) 並 執行 (Execute)</strong> 年度指標性盛會，
          這不僅是軟體發表，更是台灣創意產業的技術指標。我們邀請 Adobe 原廠技術專家、硬體大廠與頂尖創作者，共同定義未來的創作標準。
        </p>
      </div>

      {/* Main Events Twin Towers Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        {/* Event 1: First Half - Creator Solutions Day */}
        <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#111] hover:border-cyan-500/50 transition-all duration-500">
          {/* Background Image Layer - Professional Workshop/Solutions Vibe */}
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop" 
            alt="Creator Solutions Day BG" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-700 pointer-events-none"
          />
          
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-cyan-900/20 to-transparent pointer-events-none group-hover:from-cyan-900/40 transition-all" />
          
          <div className="relative p-8 md:p-12 flex flex-col h-full z-10">
            <div className="flex justify-between items-start mb-8">
              <span className="bg-cyan-950/80 backdrop-blur-md text-cyan-400 text-xs font-bold px-3 py-1 rounded-full border border-cyan-800">
                1H 2026 • 上半年
              </span>
              <Layers className="text-cyan-500 group-hover:scale-110 transition-transform" size={32} />
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight text-balance">
              Creator <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solutions Day 2026</span>
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              聚焦<strong className="text-white">「跨界整合」</strong>與<strong className="text-white">「專案直擊」</strong>。
              打破 2D 平面與 3D 空間的界線，集結 After Effects、C4D、Substance 用戶。
              現場邀請知名工作室解構商業專案（Project Breakdown），展示如何運用 AI 多媒體解決方案提升產能。
            </p>

            <ul className="space-y-4 mt-auto">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <div className="bg-cyan-900/30 p-2 rounded text-cyan-400"><Box size={18} /></div>
                <span>2D/3D AI混合工作流實戰解析</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <div className="bg-cyan-900/30 p-2 rounded text-cyan-400"><Users size={18} /></div>
                <span>雲端AI應用創意專案技術分享</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <div className="bg-cyan-900/30 p-2 rounded text-cyan-400"><Cpu size={18} /></div>
                <span>地端高性能筆電、工作站 (Workstation) 體驗區</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Event 2: Second Half - Creator Link */}
        <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#111] hover:border-red-500/50 transition-all duration-500">
          {/* Background Image Layer - Massive Keynote/Adobe MAX Vibe */}
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop" 
            alt="Creator Link BG" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-700 pointer-events-none"
          />

          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-red-900/20 to-transparent pointer-events-none group-hover:from-red-900/40 transition-all" />
          
          <div className="relative p-8 md:p-12 flex flex-col h-full z-10">
            <div className="flex justify-between items-start mb-8">
              <span className="bg-red-950/80 backdrop-blur-md text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-800">
                2H 2026 • 下半年
              </span>
              <Zap className="text-red-500 group-hover:scale-110 transition-transform" size={32} />
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight text-balance">
              Creator <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Link 2026</span>
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
              適逢 <strong className="text-white">Adobe MAX 全球大會</strong>後，台灣首場大型技術發表會。
              直接空運 MAX 現場發表的「黑科技 (Sneaks)」，並邀請原廠技術專家與軟硬體夥伴，
              解密最新的 AI 模型與未來一年的創意趨勢。
            </p>

            <ul className="space-y-4 mt-auto">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <div className="bg-red-900/30 p-2 rounded text-red-400"><Globe2 size={18} /></div>
                <span>Adobe MAX Keynote 重點精華與黑科技</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <div className="bg-red-900/30 p-2 rounded text-red-400"><Mic2 size={18} /></div>
                <span>原廠專家 (Evangelist) 與硬體大廠聯合開講</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <div className="bg-red-900/30 p-2 rounded text-red-400"><Layers size={18} /></div>
                <span>數百人規模實體交流與生態系展示</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Hall of Fame / Past Events Links */}
      <div className="border-t border-white/10 pt-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            過往豐碩成果 (Hall of Fame)
          </h4>
          <span className="text-sm text-gray-500">點擊查看歷屆活動紀錄與媒體報導</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {pastEvents.map((event, idx) => (
            <a 
              key={idx}
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-gray-900/50 border border-white/5 hover:bg-gray-800 hover:border-white/20 transition group"
            >
              <span className="text-sm font-medium text-gray-300 group-hover:text-white truncate pr-2">
                {event.title}
              </span>
              <ArrowUpRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
