
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
    <section className="h-screen pt-24 pb-8 md:pt-32 md:pb-10 px-6 md:px-20 bg-black relative overflow-hidden flex flex-col justify-center">
      <ParallaxBackground />
      {/* 🌌 AMBIENT BACKGROUND */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
        
        {/* --- PART 1: THE CORE IDENTITY --- */}
        <div className="mb-8 shrink-0">
          <div className="flex items-center gap-3 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="bg-white/10 text-white text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase px-3 py-1 rounded-full border border-white/20">
              Core Vision
            </span>
            <div className="h-px w-20 bg-white/20"></div>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white leading-[1.1] mb-4 text-balance">
            Weblink 不只代理軟體，<br />
            我們構建<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-gray-500">「創作者的數位棲息地」</span>。
          </h2>
          
          <p className="text-base md:text-xl text-gray-400 font-light max-w-4xl leading-relaxed">
            <span className="text-white font-bold">Adobe 是創意的靈魂，而硬體基礎建設鑄造了強健的骨肉。</span><br/>
            我們致力於構建一種「共生 (Symbiosis)」關係，透過軟硬體極致整合。
          </p>
        </div>

        {/* --- PART 2: THE STRATEGIC NEXUS --- */}
        <div className="relative bg-white/[0.03] border border-white/10 rounded-[2rem] p-6 md:p-8 overflow-hidden flex-1 min-h-0 flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10 h-full">
            <div className="flex-1 w-full">
              <div className="inline-flex items-center gap-2 mb-6 text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                <Network size={16} />
                <span className="font-black tracking-widest uppercase text-[10px]">Strategic Nexus (鏈結核心)</span>
              </div>
              
              <h3 className="text-lg md:text-2xl font-black text-white mb-8 leading-tight">
                在這裡，我們以<span className="text-blue-500">「互助為磚、共好為樑」</span>。
                <span className="block text-base md:text-xl font-normal text-gray-400 mt-2">是為引入新活水而來。</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Point 1: Hardware */}
                <div className="space-y-2 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white border border-white/10 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                    <Users size={20} />
                  </div>
                  <h4 className="text-white font-bold text-lg">硬體夥伴</h4>
                  <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                    接觸到最具忠誠度的<strong className="text-white">設計師社群</strong>，建立品牌認同。
                  </p>
                </div>

                {/* Point 2: Software */}
                <div className="space-y-2 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white border border-white/10 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                    <Building2 size={20} />
                  </div>
                  <h4 className="text-white font-bold text-lg">軟體夥伴</h4>
                  <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                    觸及企業背後龐大的<strong className="text-white">採購需求</strong>，全案數位轉型。
                  </p>
                </div>

                {/* Point 3: Weblink */}
                <div className="space-y-2 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white border border-white/10 group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                    <Zap size={20} />
                  </div>
                  <h4 className="text-white font-bold text-lg">鏈結核心</h4>
                  <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                    主動調度生態系資源，協助夥伴實現精準的高價值轉化。
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4 text-gray-600 font-mono text-[9px] uppercase tracking-[0.3em]">
                <span>Ecosystem Orchestration</span>
                <ArrowRight size={12} />
                <span className="text-blue-500 font-bold">Strategic Partnership FY26</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
