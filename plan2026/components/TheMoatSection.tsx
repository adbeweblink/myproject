
import React from 'react';
import { 
  ShieldAlert, 
  Link, 
  Briefcase, 
  RefreshCcw, 
  FileCheck, 
  Lock,
  UserCheck
} from 'lucide-react';
import { SectionHeading } from './ui/Shared';

export const TheMoatSection: React.FC = () => {
  return (
    <section className="min-h-screen py-10 pt-24 md:pt-10 px-6 md:px-20 border-b border-white/5 bg-[#050505] flex flex-col justify-start md:justify-center relative">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/5 to-transparent pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Title Section */}
        <div className="mb-8 md:mb-6 shrink-0">
          <SectionHeading 
            title="在AI肆掠的浪潮築起商業護城河：傳遞Adobe的不可替代性" 
            subtitle="The Moat: Accountability & Lock-in" 
            color="bg-red-700" 
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Psychology of Accountability (The Shield) */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-900/20 rounded-xl flex items-center justify-center border border-red-500/30">
                <ShieldAlert className="text-red-500" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">責任歸屬 (Accountability)</h3>
                <p className="text-red-400 font-bold text-xs tracking-widest uppercase">Stability {'>'} Savings</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-gray-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl border-l-4 border-red-600 p-8 rounded-r-2xl shadow-2xl">
                <blockquote className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed italic mb-6">
                  "沒人敢扛這個責任。<br/>
                  改變設計工具使用習慣是伴隨巨大轉換風險；<br/>
                  換工具出事是<span className="text-white font-bold underline decoration-red-500 underline-offset-4">決策者</span>的問題。"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <UserCheck size={14} className="text-gray-400" />
                  </div>
                  <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">
                    Enterprise CIO Perspective
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-l-2 border-white/10 pl-4">
              <p className="text-gray-300 text-sm font-bold leading-relaxed max-w-lg mb-2">
                多數企業層仍採取 <span className="text-red-400">AI 為輔</span> 的保守政策。
              </p>
              <p className="text-gray-500 text-xs leading-relaxed max-w-lg">
                企業採購的本質不是買功能，而是買<strong className="text-white">「免責權」</strong>與<strong className="text-white">「營運穩定」</strong>。
                Weblink 協助經銷商將銷售對話從「價格戰」提升至「風險管理」層次，鞏固 Adobe 作為企業唯一安全選擇的地位。
              </p>
            </div>
          </div>

          {/* RIGHT: Ecosystem Lock-in (The Chain) */}
          <div className="flex flex-col justify-center relative pb-8 md:pb-0">
            <div className="absolute inset-0 bg-blue-900/5 rounded-3xl -z-10 border border-white/5"></div>
            
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                  <Link className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">生態鎖死 (Lock-in)</h3>
                  <p className="text-blue-400 font-bold text-xs tracking-widest uppercase">The Infinite Loop</p>
                </div>
              </div>

              {/* The Cycle Visual */}
              <div className="relative flex flex-col gap-6">
                {/* Node 1: Talent */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center shrink-0 z-10 group-hover:border-blue-500 transition-colors">
                    <Briefcase size={18} className="text-gray-300 group-hover:text-blue-400" />
                  </div>
                  <div className="flex-1 bg-black/40 p-3 rounded-lg border border-white/5">
                    <div className="text-xs text-blue-400 font-bold uppercase mb-1">Step 1: Talent Market</div>
                    <div className="text-sm text-white font-bold">職缺描述 (JD)</div>
                    <div className="text-[10px] text-gray-500">企業只招募會用 Adobe 的人才</div>
                  </div>
                </div>

                {/* Vertical Connector */}
                <div className="absolute left-5 top-8 w-0.5 h-full bg-gradient-to-b from-gray-700 via-blue-500/50 to-gray-700 -z-0"></div>

                {/* Node 2: Pipeline */}
                <div className="flex items-center gap-4 group ml-8">
                   <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center shrink-0 z-10 group-hover:border-blue-500 transition-colors">
                    <FileCheck size={18} className="text-gray-300 group-hover:text-blue-400" />
                  </div>
                  <div className="flex-1 bg-black/40 p-3 rounded-lg border border-white/5">
                    <div className="text-xs text-blue-400 font-bold uppercase mb-1">Step 2: Workflow</div>
                    <div className="text-sm text-white font-bold">工業標準 (Standard)</div>
                    <div className="text-[10px] text-gray-500">上下游廠商僅接受 .psd / .ai / .pdf 交付</div>
                  </div>
                </div>

                {/* Node 3: Software */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center shrink-0 z-10 group-hover:border-blue-500 transition-colors">
                    <Lock size={18} className="text-gray-300 group-hover:text-blue-400" />
                  </div>
                  <div className="flex-1 bg-black/40 p-3 rounded-lg border border-white/5">
                    <div className="text-xs text-blue-400 font-bold uppercase mb-1">Step 3: Tool Selection</div>
                    <div className="text-sm text-white font-bold">軟體採購 (Procurement)</div>
                    <div className="text-[10px] text-gray-500">為了配合人才與流程，必須採購 Adobe</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                 <span className="flex items-center gap-2"><RefreshCcw size={12}/> SELF-REINFORCING CYCLE</span>
                 <span className="text-blue-500 font-bold">HIGH SWITCHING COST</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
