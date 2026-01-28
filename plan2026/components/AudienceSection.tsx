
import React from 'react';
import { 
  Users, 
  Briefcase, 
  Store, 
  Building2, 
  CheckCircle2, 
  PieChart,
  Target, 
  Crown,
  ShieldCheck
} from 'lucide-react';
import { SectionHeading } from './ui/Shared';

export const AudienceSection: React.FC = () => {

  const compositionData = [
    { label: "跨領域 / 平面設計", value: 32, color: "bg-blue-500" },
    { label: "影音動畫從業人員", value: 21, color: "bg-pink-500" },
    { label: "創意人員", value: 16, color: "bg-indigo-500" },
    { label: "行銷人員", value: 10, color: "bg-purple-500" },
    { label: "高階主管 / 決策者", value: 8, color: "bg-red-500" },
    { label: "教育工作者", value: 5, color: "bg-orange-500" },
    { label: "網頁設計師", value: 3, color: "bg-cyan-500" },
    { label: "學生", value: 3, color: "bg-green-500" },
    { label: "攝影師", value: 2, color: "bg-yellow-500" },
  ];

  return (
    <section className="min-h-screen py-10 pt-24 md:pt-10 px-6 md:px-20 border-b border-white/5 bg-[#080808] flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
        
        <div className="shrink-0 mb-8 md:mb-12">
          <SectionHeading 
            title="參與 受眾輪廓分析" 
            subtitle="Audience Profile & Demographics" 
            color="bg-emerald-500" 
          />
          <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
            我們匯聚了產業中最具影響力的創意人與決策者。高比例的<strong className="text-emerald-400">採購決策權</strong>與<strong className="text-blue-400">現場互動率</strong>，確保合作夥伴能精準觸及核心商業目標。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT COLUMN: Key Metrics (Bento Grid) - 7 Columns */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Row 1: The Heavy Hitters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 94% Visit */}
                <div className="bg-[#111] rounded-3xl p-6 border border-white/10 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Store size={100} className="text-emerald-500" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold uppercase tracking-wider text-xs">
                            <CheckCircle2 size={14} /> High Engagement
                        </div>
                        <div className="text-6xl md:text-7xl font-black text-white mb-2 tracking-tighter">
                            94<span className="text-3xl md:text-4xl text-emerald-500">%</span>
                        </div>
                        <h3 className="text-lg font-bold text-white leading-tight">參觀贊助攤位</h3>
                        <p className="text-gray-500 text-xs mt-2">幾乎所有與會者都會主動與現場攤位互動，是實體接觸的最佳場域。</p>
                    </div>
                </div>

                {/* 67% Decision Power */}
                <div className="bg-[#111] rounded-3xl p-6 border border-white/10 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Briefcase size={100} className="text-blue-500" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold uppercase tracking-wider text-xs">
                            <Target size={14} /> B2B Potential
                        </div>
                        <div className="text-6xl md:text-7xl font-black text-white mb-2 tracking-tighter">
                            67<span className="text-3xl md:text-4xl text-blue-500">%</span>
                        </div>
                        <h3 className="text-lg font-bold text-white leading-tight">擁有採購影響力</h3>
                        <p className="text-gray-500 text-xs mt-2">超過六成受眾直接手握預算或能影響企業採購決策。</p>
                    </div>
                </div>
            </div>

            {/* Row 2: Organization Stats */}
            <div className="bg-[#111] rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    <div className="flex flex-col gap-2 pt-4 md:pt-0">
                        <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase">
                            <Users size={14} /> In-House
                        </div>
                        <div className="text-4xl font-black text-white">71%</div>
                        <div className="text-sm text-gray-400">服務於<br/>企業內部設計部門</div>
                    </div>
                    
                    <div className="flex flex-col gap-2 pt-4 md:pt-0 md:pl-6">
                        <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase">
                            <Building2 size={14} /> Scale {'>'} 50
                        </div>
                        <div className="text-4xl font-black text-white">43%</div>
                        <div className="text-sm text-gray-400">任職於<br/>50人以上組織</div>
                    </div>

                    <div className="flex flex-col gap-2 pt-4 md:pt-0 md:pl-6">
                        <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase">
                            <Crown size={14} /> Enterprise
                        </div>
                        <div className="text-4xl font-black text-white">29%</div>
                        <div className="text-sm text-gray-400">服務於<br/>1000人以上企業</div>
                    </div>
                </div>
            </div>

            {/* Row 3: Audience Quality Summary (New) */}
            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#111] border border-yellow-500/30 rounded-3xl p-6 relative overflow-hidden group hover:border-yellow-500/50 transition-colors">
                {/* Visual Effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/5 blur-[60px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                    
                    {/* Icon */}
                    <div className="shrink-0 relative">
                        <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full"></div>
                        <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-yellow-500/40 flex items-center justify-center relative shadow-2xl group-hover:scale-110 transition-transform duration-500">
                            <ShieldCheck size={32} className="text-yellow-400" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h4 className="text-lg md:text-xl font-black text-white mb-2 leading-tight">
                            非學生 · 非盜版 · <span className="text-yellow-400">絕佳採購動能</span>
                        </h4>
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                            這不是一場免費湊熱鬧的活動。現場 <strong className="text-white">97%</strong> 為職場專業人士，
                            他們拒絕盜版風險，擁有<strong className="text-white">正版訂閱預算</strong>，是真正具備商業價值的<strong className="text-white">「即戰力買家」</strong>。
                        </p>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-row md:flex-col gap-2 shrink-0">
                        <div className="px-3 py-1.5 rounded-lg bg-yellow-900/10 border border-yellow-500/20 text-yellow-200 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                            <CheckCircle2 size={12} className="text-yellow-400" /> Real Buyers
                        </div>
                        <div className="px-3 py-1.5 rounded-lg bg-blue-900/10 border border-blue-500/20 text-blue-200 text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                            <Briefcase size={12} className="text-blue-400" /> Pro Users
                        </div>
                    </div>
                </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Composition (Chart) - 5 Columns */}
          <div className="lg:col-span-5 bg-[#111] rounded-3xl border border-white/10 p-6 md:p-8 flex flex-col h-full relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/10 blur-[80px] rounded-full pointer-events-none"></div>
             
             <div className="flex items-center justify-between mb-6 relative z-10">
                <div>
                   <h3 className="text-xl font-bold text-white flex items-center gap-2">
                     <PieChart size={20} className="text-gray-400" /> 受眾職位組成
                   </h3>
                   <p className="text-gray-500 text-xs mt-1">多元創意領域分佈 (Top Categories)</p>
                </div>
             </div>

             <div className="flex-1 flex flex-col justify-center space-y-4 relative z-10">
                {compositionData.map((item, idx) => (
                    <div key={idx} className="group">
                        <div className="flex justify-between items-end mb-1.5">
                            <span className="text-xs md:text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
                                {item.label}
                            </span>
                            <span className="text-sm md:text-base font-bold text-white">
                                {item.value}<span className="text-xs text-gray-500 ml-0.5">%</span>
                            </span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                                className={`h-full rounded-full ${item.color} shadow-[0_0_10px_rgba(0,0,0,0.3)] relative`}
                                style={{ width: `${item.value}%` }}
                            >
                                <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite] skew-x-12 -translate-x-full"></div>
                            </div>
                        </div>
                    </div>
                ))}
             </div>

             <div className="mt-6 pt-4 border-t border-white/10 text-[10px] text-gray-600 flex justify-between items-center">
                 <span>* 數據來源：Weblink 2023~2025 年度實體活動問卷統計</span>
             </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};
