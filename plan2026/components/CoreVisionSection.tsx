
import React from 'react';
import { 
  Sparkles,
  Network,
  Users,
  Building2,
  Zap,
  ArrowRight
} from 'lucide-react';
import { ParallaxBackground } from './ui/Motion';

export const CoreVisionSection: React.FC = () => {
  return (
    <section className="min-h-screen py-24 px-6 md:px-20 bg-black relative overflow-hidden flex flex-col justify-center">
      <ParallaxBackground />
      {/* 🌌 AMBIENT BACKGROUND */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* --- PART 1: THE CORE IDENTITY --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="bg-white/10 text-white text-[10px] font-black tracking-[0.3em] uppercase px-3 py-1 rounded-full border border-white/20">
              Core Vision
            </span>
            <div className="h-px w-20 bg-white/20"></div>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter text-balance">
            Weblink 不只代理軟體，<br />
            我們構建<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-gray-500">「創作者的數位棲息地」</span>。
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-4xl leading-relaxed">
            <span className="text-white font-bold">Adobe 是創意的靈魂，而硬體基礎建設鑄造了強健的骨肉。</span><br/>
            我們致力於構建一種「共生 (Symbiosis)」關係，透過軟硬體極致整合，創造單一產品無法實現的高價值轉化。
          </p>
        </div>

        {/* --- PART 2: THE STRATEGIC NEXUS --- */}
        <div className="relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-8 text-blue-400 bg-blue-400/10 px-4 py-1.5 rounded-full border border-blue-400/20">
                <Network size={20} />
                <span className="font-black tracking-widest uppercase text-xs">Strategic Nexus (鏈結核心)</span>
              </div>
              
              <h3 className="text-xl md:text-3xl font-black text-white mb-12 leading-tight">
                在這裡，我們以<span className="text-blue-500">「互助為磚、共好為樑」</span>。
                <span className="block text-lg md:text-2xl font-normal text-gray-400 mt-4">是為引入新活水而來。</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Point 1: Hardware */}
                <div className="space-y-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                    <Users size={24} />
                  </div>
                  <h4 className="text-white font-bold text-xl">硬體夥伴</h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    接觸到最具忠誠度的<strong className="text-white">設計師社群</strong>，直接建立品牌認同與升級算力的高頻接觸。
                  </p>
                </div>

                {/* Point 2: Software */}
                <div className="space-y-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                    <Building2 size={24} />
                  </div>
                  <h4 className="text-white font-bold text-xl">軟體夥伴</h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    觸及企業背後龐大的<strong className="text-white">採購需求</strong>，將單點工具轉化為全案數位轉型解決方案。
                  </p>
                </div>

                {/* Point 3: Weblink */}
                <div className="space-y-4 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white border border-white/10 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                    <Zap size={24} />
                  </div>
                  <h4 className="text-white font-bold text-xl">鏈結核心</h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    身為<strong className="text-white">創意產業鏈鏈結者</strong>，主動調度生態系資源，協助夥伴實現精準的高價值轉化。
                  </p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4 text-gray-600 font-mono text-[10px] uppercase tracking-[0.3em]">
                <span>Ecosystem Orchestration</span>
                <ArrowRight size={14} />
                <span className="text-blue-500 font-bold">Strategic Partnership FY26</span>
              </div>
            </div>

            <div className="shrink-0 hidden lg:flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full animate-pulse"></div>
                <div className="relative bg-black border border-white/10 p-12 rounded-full flex items-center justify-center w-64 h-64 shadow-2xl">
                   <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_30s_linear_infinite]"></div>
                   <Sparkles size={80} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
