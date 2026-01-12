
import React from 'react';
import { 
  BrainCircuit, 
  Cpu, 
  Layers
} from 'lucide-react';
import { SectionHeading } from './ui/Shared';

export const ConcentricStrategySection: React.FC = () => {
  return (
    <section className="min-h-screen py-0 px-6 md:px-20 border-b border-white/5 bg-black flex flex-col justify-center overflow-hidden relative">
       {/* Ambient Background */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none"></div>

       {/* Strict Animation Rules for "Ferris Wheel" Effect */}
       <style>{`
          @keyframes orbit-cw {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes orbit-ccw {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          
          /* Inner Circle: 20s */
          .orbit-container-1 { animation: orbit-cw 20s linear infinite; }
          .orbit-content-1 { animation: orbit-ccw 20s linear infinite; }

          /* Middle Circle: 30s (Reverse Orbit) */
          .orbit-container-2 { animation: orbit-ccw 30s linear infinite; }
          .orbit-content-2 { animation: orbit-cw 30s linear infinite; }

          /* Outer Circle: 40s */
          .orbit-container-3 { animation: orbit-cw 40s linear infinite; }
          .orbit-content-3 { animation: orbit-ccw 40s linear infinite; }
       `}</style>

       <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center h-full max-h-[90vh]">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center z-10 pb-8 md:pb-0">
             <SectionHeading 
                title="Weblink 同心圓戰略" 
                subtitle="The Concentric Ecosystem Strategy" 
                color="bg-gradient-to-r from-blue-500 to-indigo-500" 
             />
             
             <p className="text-lg md:text-xl text-white font-bold mb-6 leading-relaxed">
               連結 <span className="text-blue-400">勢 (Momentum)</span> 與 <span className="text-indigo-400">局 (Reality)</span>，<br/>
               構建不可替代的商業閉環。
             </p>

             <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed max-w-xl">
               Weblink 位於生態系的圓心，扮演「連結者」的角色。
               我們將內環的創新「勢能」，透過外環的解決方案，安全地導入中環的商業「佈局」中。
             </p>

             <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-blue-500/20 bg-blue-900/5 backdrop-blur-sm group hover:border-blue-500/50 transition-colors">
                   <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                      <BrainCircuit size={20} />
                   </div>
                   <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="text-blue-300 font-bold text-sm uppercase tracking-wider">Inner Circle (內環)</div>
                        <span className="bg-blue-900/50 text-blue-200 text-[9px] px-2 py-0.5 rounded border border-blue-500/30">勢 Momentum</span>
                      </div>
                      <div className="text-gray-400 text-xs">Innovation Models: Google, OpenAI, Sora (算力源頭)</div>
                   </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-purple-500/20 bg-purple-900/5 backdrop-blur-sm group hover:border-purple-500/50 transition-colors">
                   <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
                      <Layers size={20} />
                   </div>
                   <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="text-purple-300 font-bold text-sm uppercase tracking-wider">Middle Circle (中環)</div>
                        <span className="bg-purple-900/50 text-purple-200 text-[9px] px-2 py-0.5 rounded border border-purple-500/30">局 Reality</span>
                      </div>
                      <div className="text-gray-400 text-xs">Commercial Grid: Adobe Creative Cloud (商業標準)</div>
                   </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-indigo-500/20 bg-indigo-900/5 backdrop-blur-sm group hover:border-indigo-500/50 transition-colors">
                   <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-110 transition-transform">
                      <Cpu size={20} />
                   </div>
                   <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="text-indigo-300 font-bold text-sm uppercase tracking-wider">Outer Circle (外環)</div>
                        <span className="bg-indigo-900/50 text-indigo-200 text-[9px] px-2 py-0.5 rounded border border-indigo-500/30">連結 Connector</span>
                      </div>
                      <div className="text-gray-400 text-xs">Solution Architect: Weblink Hardware & Services (落地應用)</div>
                   </div>
                </div>
             </div>
          </div>

          {/* Concentric Visualization */}
          <div className="order-1 lg:order-2 flex items-center justify-center relative min-h-[500px] scale-[0.65] md:scale-100 origin-center">
             
             {/* Center Core: Firefly x Adobe */}
             <div className="absolute z-40 flex flex-col items-center justify-center w-32 h-32 rounded-full bg-black border border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
                <div className="text-white font-black text-xs tracking-widest mb-1">CORE</div>
                <div className="text-blue-400 font-bold text-xl">FIREFLY</div>
                <div className="w-8 h-0.5 bg-gray-700 my-1"></div>
                <div className="text-[#FA0F00] font-bold text-lg">ADOBE</div>
             </div>

             {/* Orbit 1: Models (Inner) - Spinning Clockwise 20s */}
             <div className="absolute w-[240px] h-[240px] rounded-full border border-blue-500/20 z-30 orbit-container-1">
                {/* Google */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" title="Google">
                   <div className="orbit-content-1 w-12 h-12 bg-black border border-blue-500/50 rounded-full flex items-center justify-center text-blue-400 shadow-lg">
                      <span className="text-[10px] font-bold">Google</span>
                   </div>
                </div>
                {/* OpenAI */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" title="OpenAI">
                   <div className="orbit-content-1 w-12 h-12 bg-black border border-green-500/50 rounded-full flex items-center justify-center text-green-400 shadow-lg">
                      <span className="text-[10px] font-bold">OpenAI</span>
                   </div>
                </div>
                {/* Sora */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" title="Sora">
                   <div className="orbit-content-1 w-12 h-12 bg-black border border-pink-500/50 rounded-full flex items-center justify-center text-pink-400 shadow-lg">
                      <span className="text-[10px] font-bold">Sora</span>
                   </div>
                </div>
                {/* Flux */}
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2" title="Flux">
                   <div className="orbit-content-1 w-12 h-12 bg-black border border-orange-500/50 rounded-full flex items-center justify-center text-orange-400 shadow-lg">
                      <span className="text-[10px] font-bold">Flux</span>
                   </div>
                </div>
             </div>
             
             {/* Orbit 2: Adobe Apps (Middle) - Spinning Counter-Clockwise 30s */}
             <div className="absolute w-[360px] h-[360px] rounded-full border border-purple-500/20 z-20 border-dashed orbit-container-2">
                 {/* PS - Top */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="orbit-content-2 w-10 h-10 bg-[#31A8FF] border border-white/20 rounded-full flex items-center justify-center text-[#001E36] shadow-lg">
                       <span className="text-[10px] font-black">Ps</span>
                    </div>
                 </div>
                 {/* PR - Bottom */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="orbit-content-2 w-10 h-10 bg-[#9999FF] border border-white/20 rounded-full flex items-center justify-center text-[#00005B] shadow-lg">
                       <span className="text-[10px] font-black">Pr</span>
                    </div>
                 </div>
                 {/* AI - Top Right */}
                 <div className="absolute top-[25%] right-[6%] translate-x-1/2 -translate-y-1/2">
                    <div className="orbit-content-2 w-10 h-10 bg-[#FF9A00] border border-white/20 rounded-full flex items-center justify-center text-[#331E01] shadow-lg">
                       <span className="text-[10px] font-black">Ai</span>
                    </div>
                 </div>
                 {/* AE - Bottom Left */}
                 <div className="absolute bottom-[25%] left-[6%] -translate-x-1/2 translate-y-1/2">
                    <div className="orbit-content-2 w-10 h-10 bg-[#9999FF] border border-white/20 rounded-full flex items-center justify-center text-[#00005B] shadow-lg">
                       <span className="text-[10px] font-black">Ae</span>
                    </div>
                 </div>
                 {/* LR - Bottom Right */}
                 <div className="absolute bottom-[25%] right-[6%] translate-x-1/2 translate-y-1/2">
                    <div className="orbit-content-2 w-10 h-10 bg-[#31A8FF] border border-white/20 rounded-full flex items-center justify-center text-[#001E36] shadow-lg">
                       <span className="text-[10px] font-black">Lr</span>
                    </div>
                 </div>
                 {/* DC - Top Left */}
                 <div className="absolute top-[25%] left-[6%] -translate-x-1/2 -translate-y-1/2">
                    <div className="orbit-content-2 w-10 h-10 bg-[#FF0000] border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg">
                       <span className="text-[10px] font-black">Dc</span>
                    </div>
                 </div>
             </div>

             {/* Orbit 3: Solutions (Outer) - Spinning Clockwise 40s */}
             <div className="absolute w-[500px] h-[500px] rounded-full border border-indigo-500/20 z-10 border-dotted opacity-70 orbit-container-3">
                {/* GPU */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="orbit-content-3 w-12 h-12 bg-black border border-green-500/50 rounded-full flex items-center justify-center text-green-500 shadow-lg">
                      <span className="text-[10px] font-bold font-mono">GPU</span>
                   </div>
                </div>
                {/* NAS */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                   <div className="orbit-content-3 w-12 h-12 bg-black border border-cyan-500/50 rounded-full flex items-center justify-center text-cyan-500 shadow-lg">
                      <span className="text-[10px] font-bold font-mono">NAS</span>
                   </div>
                </div>
                {/* CPU */}
                <div className="absolute top-[25%] right-[6%] translate-x-1/2 -translate-y-1/2">
                   <div className="orbit-content-3 w-12 h-12 bg-black border border-indigo-500/50 rounded-full flex items-center justify-center text-indigo-500 shadow-lg">
                      <span className="text-[10px] font-bold font-mono">CPU</span>
                   </div>
                </div>
                {/* SSD */}
                <div className="absolute bottom-[25%] left-[6%] -translate-x-1/2 translate-y-1/2">
                   <div className="orbit-content-3 w-12 h-12 bg-black border border-white/30 rounded-full flex items-center justify-center text-gray-300 shadow-lg">
                      <span className="text-[10px] font-bold font-mono">SSD</span>
                   </div>
                </div>
                {/* Font */}
                <div className="absolute bottom-[25%] right-[6%] translate-x-1/2 translate-y-1/2">
                   <div className="orbit-content-3 w-12 h-12 bg-black border border-pink-500/50 rounded-full flex items-center justify-center text-pink-500 shadow-lg">
                      <span className="text-[10px] font-bold font-mono">FONT</span>
                   </div>
                </div>
                {/* HDD */}
                <div className="absolute top-[25%] left-[6%] -translate-x-1/2 -translate-y-1/2">
                   <div className="orbit-content-3 w-12 h-12 bg-black border border-orange-500/50 rounded-full flex items-center justify-center text-orange-500 shadow-lg">
                      <span className="text-[10px] font-bold font-mono">HDD</span>
                   </div>
                </div>
             </div>

             {/* Orbit Labels - Fixed positions */}
             <div className="absolute w-[600px] h-[600px] flex items-center justify-center pointer-events-none opacity-20">
                 <div className="absolute top-4 text-[9px] font-mono text-indigo-400 uppercase tracking-[0.3em]">Hardware & Solutions</div>
             </div>

             {/* Decorative Lines connecting Center to Out */}
             <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-900/20 to-transparent rotate-45"></div>
             <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-900/20 to-transparent -rotate-45"></div>
          </div>
       </div>
    </section>
  );
};
