
import React, { useRef, useEffect } from 'react';
import { Box, Palette, Cpu, HardDrive, Type, MousePointer2, ExternalLink, ArrowUpRight, Zap, Target, ChevronLeft, ChevronRight, Command } from 'lucide-react';
import { SectionHeading } from './ui/Shared';
import { AllianceItem } from '../types';

export const StrategicAllianceSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // Adjusted for card width
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const section = document.getElementById('alliance');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= -window.innerHeight / 2 && rect.bottom <= window.innerHeight * 1.5;
      
      if (isVisible) {
        if (e.key === 'ArrowLeft') scroll('left');
        else if (e.key === 'ArrowRight') scroll('right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const alliances: AllianceItem[] = [
    {
      id: 'apple',
      category: '原生效能優化',
      icon: Command,
      partners: [{ name: 'Mac 生態系整合', logo: '' }],
      desc: '針對 Apple Silicon 架構深度優化，提供設計師最流暢的創作體驗。',
      relationship: 'Adobe 全線產品原生支援 M 系列晶片。iPad 版 Ps/Ai 與桌面端的無縫接軌 (Sidecar)，更是 Apple 生態圈獨有的優勢。',
      opportunity: '針對設計公司推廣「Mac 企業租賃 + CCE」訂閱整合方案，主打軟硬體相容性零煩惱的純粹創作環境。',
      color: 'border-gray-400',
      textColor: 'text-gray-400',
      bg: 'bg-gray-800/20',
      image: '' // Removed broken image
    },
    {
      id: 'gpu',
      category: '圖形算力解放',
      icon: Zap,
      partners: [{ name: '高階顯示運算', logo: '' }],
      desc: '釋放生成式 AI 的真正潛能，將漫長的算圖等待轉化為即時的創作流動。',
      relationship: 'Firefly Video Model 生成與 3D 渲染極度消耗 VRAM。高階 GPU 是流暢運行 After Effects 與 AI 功能的物理前提。',
      opportunity: '推廣「高階工作站汰換計畫」，主打「時間即金錢」的 ROI 效益分析，鎖定特效工作室進行硬體與軟體合購提案。',
      color: 'border-green-400', 
      textColor: 'text-green-400', 
      bg: 'bg-green-900/10',
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop' // GPU Image
    },
    {
      id: 'storage', 
      category: '數據儲存分層', 
      icon: HardDrive,
      partners: [{ name: '混合儲存架構', logo: '' }],
      desc: '從 SSD 的極速快取到 HDD 的海量備份，構建影像團隊的數據堡壘。',
      relationship: 'Premiere Pro 依賴 NVMe SSD 進行零延遲預覽 (Cache)，而團隊協作則需要 NAS (HDD) 進行素材共享與版本控管，缺一不可。',
      opportunity: '推廣「分層儲存顧問服務」，將 NAS 硬體銷售與 Adobe Team Projects 協作流程綁定，提升專案客單價。',
      color: 'border-cyan-500', 
      textColor: 'text-cyan-500', 
      bg: 'bg-cyan-900/10',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop' // Data Center
    },
    {
      id: 'color', 
      category: '品牌權威加持', 
      icon: Palette,
      partners: [{ name: '國際色票標準', logo: '' }],
      desc: '與全球色彩權威深度綁定，建立設計專業的不可替代性。',
      relationship: '色彩準確度是印刷與品牌設計的命脈。透過標準化色票系統在 Photoshop/Illustrator 中的深度整合，確保從螢幕到印刷的色準一致性。',
      opportunity: '針對設計公司與印刷廠推廣「色彩管理解決方案」，銷售實體色票指南與 Adobe CC 企業版的合規訂閱，降低打樣重製成本。',
      color: 'border-pink-500', 
      textColor: 'text-pink-500', 
      bg: 'bg-pink-900/10',
      image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=1000&auto=format&fit=crop' // Color Swatches
    },
    {
      id: 'hardware', 
      category: '硬體綑綁行銷', 
      icon: Cpu,
      partners: [{ name: 'AIPC 硬體加速', logo: '' }],
      desc: '工欲善其事，利用 AI 算力需求帶動軟硬體雙向升級。',
      relationship: 'Firefly 生成式 AI 與 Premiere Pro 的 8K 剪輯依賴 NPU 加速。軟體效能的上限，往往取決於硬體的算力架構。',
      opportunity: '與筆電大廠推出「Adobe 認證創作者筆電」，將硬體與 CCE 授權綑綁，說服採購部門進行全套設備汰換。',
      color: 'border-indigo-500', 
      textColor: 'text-indigo-500', 
      bg: 'bg-indigo-900/10',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1000&auto=format&fit=crop' // CPU Chip
    },
    {
      id: '3d', 
      category: '受眾疆界擴張', 
      icon: Box,
      partners: [{ name: '3D 建模軟體', logo: '' }],
      desc: '打破 2D 與 3D 的創作藩籬，開拓遊戲與影視特效市場。',
      relationship: 'Adobe Substance 3D 與 After Effects 是動畫產業的工業標準。與即時動畫工具的整合，能補足 Adobe 在角色動態上的最後一哩路。',
      opportunity: '鎖定遊戲開發商與 Vtuber 產業，推動「Substance + Ae」的高階訂閱組合，並透過 3D 角色工作坊吸引傳統平面設計師升級。',
      color: 'border-orange-500', 
      textColor: 'text-orange-500', 
      bg: 'bg-orange-900/10',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop' // 3D Mesh
    },
    {
      id: 'font', 
      category: '智財合規推廣', 
      icon: Type,
      partners: [{ name: '商用字體授權', logo: '' }],
      desc: '消除企業最恐懼的侵權風險，推廣正版字型與軟體合規。',
      relationship: '字型侵權是企業最常見的法律地雷。Adobe Fonts 雖強大，但在地化中文字型仍需第三方補強。結合雙方優勢，提供完整的字型合規防護網。',
      opportunity: '提供企業「數位資產合規健檢」，在審查字型授權的同時，一併檢視並正規化 Adobe 軟體授權，帶動 CCE 企業版銷售。',
      color: 'border-blue-500', 
      textColor: 'text-blue-500', 
      bg: 'bg-blue-900/10',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=1000&auto=format&fit=crop' // Fixed: Letterpress/Font Image
    },
    {
      id: 'gear', 
      category: '體驗優化行銷', 
      icon: MousePointer2,
      partners: [{ name: '創作週邊裝置', logo: '' }],
      desc: '透過專屬周邊釋放軟體潛能，提升設計師操作黏著度。',
      relationship: '數位創作需要精準的手感。繪圖板的感壓支援 (Ps/Ai) 與 快捷鍵盤的巨集指令 (Pr) 能大幅釋放 Adobe 軟體的生產力潛能。',
      opportunity: '在實體通路與展會設立「極致創作體驗區」，讓用戶體驗軟硬體結合的流暢感，並透過周邊贈品促銷方案提升轉化率。',
      color: 'border-purple-500', 
      textColor: 'text-purple-500', 
      bg: 'bg-purple-900/10',
      image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop' // Clean Desk
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 md:px-20 border-b border-white/5 bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden relative" id="alliance">
      <div className="max-w-[90rem] mx-auto w-full flex flex-col justify-center">
        
        {/* Header - Aggressively reduced margin for closeness */}
        <div className="shrink-0 mb-8 w-full flex flex-col justify-end">
          <SectionHeading 
            title="Adobe Partner Solutions Ecosystem" 
            subtitle="Ecosystem Layer 2: Infrastructure & Industry" 
            color="bg-indigo-500" 
          />
          
          <div className="w-full">
            <p className="text-gray-300 text-sm md:text-base max-w-4xl leading-relaxed">
              <strong className="text-white block mb-2 text-lg">從「模型驅動」向外擴張至「場景落地」</strong>
              這是生態圈的第二層擴張。創意不僅需要軟體核心，更需要強大的硬體支撐。Weblink 連結 AIPC 算力、色彩權威與儲存方案，為高負載的 AI 工作流構建最堅實的物理基座，實現軟硬體整合的完整閉環。
            </p>
          </div>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="relative w-full group/scroll flex-none flex items-center justify-center">
           
           {/* Scroll Buttons */}
           <button 
              onClick={() => scroll('left')}
              className="absolute left-0 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white opacity-0 group-hover/scroll:opacity-100 hover:bg-white/20 transition-all backdrop-blur-md -ml-4 md:-ml-8 hidden md:flex"
           >
              <ChevronLeft size={24} />
           </button>
           <button 
              onClick={() => scroll('right')}
              className="absolute right-0 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white opacity-0 group-hover/scroll:opacity-100 hover:bg-white/20 transition-all backdrop-blur-md -mr-4 md:-mr-8 hidden md:flex"
           >
              <ChevronRight size={24} />
           </button>

           <div 
             ref={scrollContainerRef}
             className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar w-full items-center py-4 px-1"
           >
              {alliances.map((item) => {
                 const Icon = item.icon;
                 return (
                  <div 
                    key={item.id} 
                    className={`
                      snap-center shrink-0 w-[280px] md:w-[340px] h-[450px] 
                      group relative overflow-hidden rounded-3xl border border-white/10 
                      transition-all duration-500 cursor-default
                      hover:shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:border-white/20 hover:-translate-y-2
                    `}
                  >
                    {/* Background Image with Zoom Effect */}
                    <div className="absolute inset-0 overflow-hidden bg-[#050505]">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.category} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40 filter brightness-50 group-hover:brightness-75 saturate-50 group-hover:saturate-100"
                        />
                      ) : (
                        <div className="w-full h-full relative">
                           {/* Glassy Gradient Effect for Apple Card */}
                           <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black opacity-50" />
                           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                           <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-30" />
                        </div>
                      )}

                      {/* Dynamic Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95`} />
                      
                      {/* Color Tint Overlay on Hover */}
                      <div className={`absolute inset-0 ${item.bg} mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                    </div>

                    {/* Content Container - Vertically Balanced */}
                    <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                      
                      {/* Top Section */}
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <div className={`
                            p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white 
                            group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl
                          `}>
                            <Icon size={18} />
                          </div>
                        </div>
                        
                        <div className={`text-[9px] font-bold tracking-widest uppercase mb-1 ${item.textColor} flex items-center gap-2`}>
                           {item.category}
                        </div>
                        
                        <h3 className="text-lg md:text-xl font-black text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                          {item.partners.map(p => p.name).join(' & ')}
                        </h3>
                        
                        <p className="text-gray-400 text-[11px] font-medium leading-relaxed mb-3 group-hover:text-white transition-colors line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                      
                      {/* Hover Reveal Section (Details) */}
                      <div className="space-y-2 mt-auto">
                         
                         <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-2 mb-1 text-white font-bold text-[10px] uppercase tracking-wider">
                               <Zap size={10} className={item.textColor} /> Adobe 關聯性
                            </div>
                            <p className="text-[10px] text-gray-300 leading-relaxed text-justify line-clamp-2 group-hover:line-clamp-none transition-all">
                               {item.relationship}
                            </p>
                         </div>

                         <div className="bg-gradient-to-br from-white/10 to-transparent rounded-xl p-2.5 border border-white/10 backdrop-blur-sm group-hover:from-white/15 transition-colors">
                            <div className="flex items-center gap-2 mb-1 text-white font-bold text-[10px] uppercase tracking-wider">
                               <Target size={10} className={item.textColor} /> 潛在商機
                            </div>
                            <p className="text-[10px] text-gray-200 leading-relaxed text-justify font-medium line-clamp-2 group-hover:line-clamp-none transition-all">
                               {item.opportunity}
                            </p>
                         </div>

                         {/* Action Button */}
                         <div className="pt-2">
                           {item.id === 'color' ? (
                             <a 
                               href="https://adbeweblink.github.io/myproject/pantone/pantone2026.html"
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-pink-600 hover:bg-pink-500 text-white text-[10px] font-bold uppercase tracking-widest shadow-lg transition-all hover:scale-[1.02] border border-pink-500/50"
                             >
                               查看創作者解決方案 <ExternalLink size={12} />
                             </a>
                           ) : (
                             <button 
                               disabled
                               className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white/5 text-gray-600 text-[10px] font-bold uppercase tracking-widest border border-white/5 cursor-not-allowed"
                             >
                               Coming Soon
                             </button>
                           )}
                         </div>

                      </div>

                    </div>
                  </div>
                 );
              })}
           </div>
        </div>
      </div>
    </section>
  );
};
