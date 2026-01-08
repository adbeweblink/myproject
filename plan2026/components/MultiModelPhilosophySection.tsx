
import React from 'react';
import { 
  Sparkles,
  Layers,
  ShieldCheck,
  FileText,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';

export const MultiModelPhilosophySection: React.FC = () => {
  return (
    <section className="min-h-screen py-10 pt-24 md:pt-10 px-6 md:px-20 border-b border-white/5 bg-black relative overflow-hidden flex flex-col justify-start md:justify-center">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>

       <div className="w-full relative z-10">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-gray-400">
              Adobe：企業 AI 的<br className="md:hidden" />「收斂點 (Convergence Point)」
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-red-600 mx-auto rounded-full mb-6 shadow-[0_0_20px_rgba(239,68,68,0.5)]"></div>
            
            <p className="text-lg md:text-2xl text-white font-bold mb-6 max-w-4xl mx-auto leading-normal">
              「我們將 AI 的流量導向 Adobe 生態系，<br className="hidden md:block"/>
              完成最後、也是最有價值的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">商業交付</span>。」
            </p>
          </div>

          {/* 🚀 FOUR PILLARS WORKFLOW VISUALIZATION */}
          <div className="relative w-full max-w-7xl mx-auto">
             
             {/* Desktop Grid Layout */}
             <div className="hidden lg:grid grid-cols-4 gap-4 relative">
                
                {/* Connecting Line */}
                <div className="absolute top-[40%] left-0 w-full h-0.5 bg-gradient-to-r from-green-500/20 via-blue-500 to-red-500/20 z-0"></div>

                {/* PILLAR 1: INPUT */}
                <div className="relative group z-10">
                   <div className="bg-gray-900/60 border border-white/10 p-5 rounded-2xl text-center group-hover:border-green-500/50 transition-all h-full flex flex-col items-center">
                      <div className="w-12 h-12 bg-green-900/20 text-green-400 rounded-full flex items-center justify-center mb-3 ring-1 ring-green-900/50">
                         <BrainCircuit size={24} />
                      </div>
                      <h4 className="text-green-400 font-bold mb-1 uppercase tracking-widest text-[10px]">Step 1: Input</h4>
                      <h3 className="text-white font-bold text-lg mb-2">多模態發想</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        運用 ChatGPT, Claude, Midjourney 等模型進行創意發想。
                      </p>
                      <div className="mt-3 flex gap-1.5 opacity-40">
                         <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-white">LLMs</div>
                         <div className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] text-white">T2I</div>
                      </div>
                   </div>
                   <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
                </div>

                {/* PILLAR 2: EDIT */}
                <div className="relative group z-10">
                   <div className="bg-gray-900/60 border border-white/10 p-5 rounded-2xl text-center group-hover:border-blue-500/50 transition-all h-full flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-900/20 text-blue-400 rounded-full flex items-center justify-center mb-3 ring-1 ring-blue-900/50">
                         <Layers size={24} />
                      </div>
                      <h4 className="text-blue-400 font-bold mb-1 uppercase tracking-widest text-[10px]">Step 2: Edit</h4>
                      <h3 className="text-white font-bold text-lg mb-2">專業精修</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        匯入 Creative Cloud 進行極致細節與專業格式編輯。
                      </p>
                      <div className="mt-3 flex gap-1.5 opacity-40">
                         <div className="px-2 py-0.5 rounded bg-blue-900 text-[9px] text-white">Ps</div>
                         <div className="px-2 py-0.5 rounded bg-indigo-900 text-[9px] text-white">Ai</div>
                         <div className="px-2 py-0.5 rounded bg-purple-900 text-[9px] text-white">Pr</div>
                      </div>
                   </div>
                   <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
                </div>

                {/* PILLAR 3: GENERATE */}
                <div className="relative group z-10">
                   <div className="bg-gray-900/60 border-2 border-red-600/30 p-5 rounded-2xl text-center group-hover:border-red-500 transition-all h-full flex flex-col items-center shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                      <div className="w-12 h-12 bg-red-900/20 text-red-500 rounded-full flex items-center justify-center mb-3 ring-1 ring-red-900/50">
                         <ShieldCheck size={24} />
                      </div>
                      <h4 className="text-red-500 font-bold mb-1 uppercase tracking-widest text-[10px]">Step 3: Generate</h4>
                      <h3 className="text-white font-bold text-lg mb-2">安全生成</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        利用 Firefly 進行企業級版權合規生成，確立免責基座。
                      </p>
                      <div className="mt-3 flex gap-1.5">
                         <div className="px-2 py-1 rounded bg-red-600 text-[9px] text-white font-black tracking-tight text-center leading-tight">
                            CC Enterprise<br/>Edition 4
                         </div>
                      </div>
                   </div>
                   <ArrowRight className="absolute -right-4 top-1/2 -translate-y-1/2 text-gray-700" size={20} />
                </div>

                {/* PILLAR 4: GOVERN */}
                <div className="relative group z-10">
                   <div className="bg-gray-900/60 border border-white/10 p-5 rounded-2xl text-center group-hover:border-purple-500/50 transition-all h-full flex flex-col items-center">
                      <div className="w-12 h-12 bg-purple-900/20 text-purple-400 rounded-full flex items-center justify-center mb-3 ring-1 ring-purple-900/50">
                         <FileText size={24} />
                      </div>
                      <h4 className="text-purple-400 font-bold mb-1 uppercase tracking-widest text-[10px]">Step 4: Govern</h4>
                      <h3 className="text-white font-bold text-lg mb-2">文檔治理</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        透過 Acrobat Studio 進行最後的文檔合規與商業交付。
                      </p>
                      <div className="mt-3 flex gap-1.5">
                         <div className="px-2 py-1 rounded bg-red-600 text-[9px] text-white font-black tracking-tight text-center leading-tight">
                            Acrobat<br/>Studio
                         </div>
                      </div>
                   </div>
                </div>

             </div>

             {/* Mobile View (Stack) */}
             <div className="lg:hidden space-y-3 pb-8 md:pb-0">
                {[
                  { title: "Input (發想)", icon: BrainCircuit, color: "text-green-500", desc: "多元模型激盪創意" },
                  { title: "Edit (精修)", icon: Layers, color: "text-blue-500", desc: "CC 專業編輯工作流" },
                  { title: "Generate (生成)", icon: ShieldCheck, color: "text-red-500", desc: "Enterprise Edition 4" },
                  { title: "Govern (治理)", icon: FileText, color: "text-purple-500", desc: "Acrobat 商業交付終點" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-900 border border-white/10 p-3 rounded-xl flex items-center gap-3">
                     <item.icon className={item.color} size={20} />
                     <div>
                        <div className="text-white font-bold text-sm">{item.title}</div>
                        <div className="text-gray-500 text-xs">{item.desc}</div>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed italic md:whitespace-nowrap">
              「真正決定勝負的不是你用了多少模型，而是你如何將 AI 的流量，導引回企業能控制、能合規、能獲利的流程中。」
            </p>
          </div>
       </div>
    </section>
  );
};
