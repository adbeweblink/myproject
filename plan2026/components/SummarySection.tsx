
import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  Zap, 
  BrainCircuit, 
  Calendar, 
  Gamepad2,
  TrendingUp,
  Target,
  ArrowUpRight
} from 'lucide-react';
import { SectionHeading } from './ui/Shared';

interface BentoItemProps {
  className?: string;
  bgImage: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  children?: React.ReactNode;
  accentColor?: string;
}

const BentoItem: React.FC<BentoItemProps> = ({ 
  className = "", 
  bgImage, 
  title, 
  subtitle, 
  icon: Icon,
  children,
  accentColor = "text-white"
}) => (
  <div className={`relative group rounded-3xl overflow-hidden border border-white/10 bg-[#111] ${className}`}>
    {/* Background Image with Zoom Effect */}
    <div className="absolute inset-0 overflow-hidden">
      <img 
        src={bgImage} 
        alt={title} 
        className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent/20" />
    </div>

    {/* Content */}
    <div className="relative z-10 p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/5 ${accentColor}`}>
          <Icon size={20} />
        </div>
        <ArrowUpRight className="text-white/20 group-hover:text-white transition-colors" size={16} />
      </div>

      <div className="mt-auto">
        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{subtitle}</div>
        <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-2">{title}</h3>
        {children}
      </div>
    </div>
  </div>
);

export const SummarySection: React.FC = () => {
  return (
    <section className="min-h-screen py-10 pt-24 md:pt-10 px-6 md:px-20 border-b border-white/5 bg-[#050505] flex flex-col justify-center overflow-hidden" id="summary">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        
        <div className="shrink-0 mb-1 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading 
            title="FY26 行銷推動策略總結" 
            subtitle="Mission Complete: The Assets" 
            color="bg-white" 
          />
          <div className="text-right hidden md:block pb-6 md:pb-8">
            <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">Weblink Command Center</p>
            <p className="text-white font-bold text-sm">Strategic Overview Status: <span className="text-green-500">READY</span></p>
          </div>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1 min-h-[600px]">
          
          {/* 1. CORE VISION (Large - 2x2) */}
          <BentoItem 
            className="md:col-span-2 md:row-span-2 min-h-[300px]"
            bgImage="https://as1.ftcdn.net/v2/jpg/07/93/25/94/1000_F_793259494_H7JvWsOtwkkOjw2SvrVp4PmEs7iar48y.jpg"
            title="駕馭「多元模型」確立「安全基座」"
            subtitle="行銷工作全面注入 AI 基因"
            icon={ShieldCheck}
            accentColor="text-red-500"
          >
            <p className="text-gray-300 text-sm mt-2 leading-relaxed">
              在 AI 肆掠的浪潮中築起<span className="text-white font-bold border-b border-red-500">商業護城河</span>。我們不只賣軟體，更販售企業最需要的「免責權」與「營運穩定性」。
            </p>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-red-900/40 border border-red-500/30 text-red-200 text-xs font-bold">Moat / 護城河</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-bold">Enterprise Ed. 4</span>
            </div>
          </BentoItem>

          {/* 2. COMMUNITY ASSETS (Tall - 1x2) */}
          <BentoItem 
            className="md:col-span-1 md:row-span-2 min-h-[300px]"
            bgImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
            title="社群數位資產"
            subtitle="Community Power"
            icon={Users}
            accentColor="text-green-500"
          >
            <div className="space-y-4 mt-4">
              <div>
                <div className="text-3xl font-black text-white">117k+</div>
                <div className="text-[10px] text-green-400 font-bold uppercase tracking-wider">LINE 好友數</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">26k+</div>
                <div className="text-[10px] text-yellow-400 font-bold uppercase tracking-wider">EDM 訂閱用戶</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">50k+</div>
                <div className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">年度行銷觸及</div>
              </div>
            </div>
          </BentoItem>

          {/* 3. MARKETING 2.0 (Standard - 1x1) */}
          <BentoItem 
            className="md:col-span-1 md:row-span-1 min-h-[200px]"
            bgImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
            title="行銷即服務 2.0"
            subtitle="AI Infused Marketing"
            icon={Zap}
            accentColor="text-blue-400"
          >
            <ul className="mt-2 space-y-1 text-xs text-gray-300">
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> 注入 AI 基因工作流</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> Adobe Ready 工具優化</li>
              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full"></div> 確保 業務端、經銷商充分使用</li>
            </ul>
          </BentoItem>

          {/* 4. LAB INNOVATION (Standard - 1x1) */}
          <BentoItem 
            className="md:col-span-1 md:row-span-1 min-h-[200px]"
            bgImage="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
            title="創新武器庫 Lab"
            subtitle="Tools & Games"
            icon={Gamepad2}
            accentColor="text-purple-400"
          >
            <div className="mt-2 flex flex-wrap gap-2">
               <span className="bg-purple-900/30 text-purple-200 px-2 py-1 rounded text-[10px] font-bold border border-purple-500/20">經銷商生產力工具</span>
               <span className="bg-pink-900/30 text-pink-200 px-2 py-1 rounded text-[10px] font-bold border border-pink-500/20">破冰互動小遊戲</span>
            </div>
          </BentoItem>

          {/* 5. STRATEGY (Standard - 1x1) */}
          <BentoItem 
            className="md:col-span-1 md:row-span-1 min-h-[200px]"
            bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
            title="同心圓戰略"
            subtitle="Weblink Strategy"
            icon={BrainCircuit}
            accentColor="text-cyan-400"
          >
             <p className="text-gray-300 text-xs mt-1 leading-snug">
               內環：AI 勢能<br/>
               中環：CC 商業佈局<br/>
               外環：解決方案變現
             </p>
          </BentoItem>

          {/* 6. EVENTS TIMELINE (Wide - 3x1) */}
          <BentoItem 
            className="md:col-span-3 md:row-span-1 min-h-[200px]"
            bgImage="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2000&auto=format&fit=crop"
            title="年度關鍵戰役 Timeline"
            subtitle="Flagship & Academy"
            icon={Calendar}
            accentColor="text-orange-500"
          >
             <div className="mt-4 flex flex-col md:flex-row gap-4 md:gap-8 overflow-x-auto no-scrollbar">
                
                <div className="flex items-center gap-3 shrink-0">
                   <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white font-black text-xs border border-white/20">
                      10x
                   </div>
                   <div>
                      <div className="text-[10px] text-orange-400 font-bold uppercase">All Year</div>
                      <div className="text-white font-bold text-sm">快充學堂 Online</div>
                   </div>
                </div>

                <div className="w-px h-10 bg-white/10 hidden md:block"></div>

                <div className="flex items-center gap-3 shrink-0">
                   <div className="w-10 h-10 rounded-lg bg-cyan-900/50 flex items-center justify-center text-cyan-400 font-black text-xs border border-cyan-500/30">
                      06/22
                   </div>
                   <div>
                      <div className="text-[10px] text-cyan-400 font-bold uppercase">Flagship 1</div>
                      <div className="text-white font-bold text-sm">Creator Solutions Day</div>
                   </div>
                </div>

                <div className="w-px h-10 bg-white/10 hidden md:block"></div>

                <div className="flex items-center gap-3 shrink-0">
                   <div className="w-10 h-10 rounded-lg bg-red-900/50 flex items-center justify-center text-red-400 font-black text-xs border border-red-500/30">
                      11/13
                   </div>
                   <div>
                      <div className="text-[10px] text-red-400 font-bold uppercase">Flagship 2</div>
                      <div className="text-white font-bold text-sm">Creator Link 2026</div>
                   </div>
                </div>

             </div>
          </BentoItem>

        </div>

      </div>
    </section>
  );
};
