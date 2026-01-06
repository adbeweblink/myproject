
import React from 'react';
import { Box, Palette, Cpu, HardDrive, Type, MousePointer2, ExternalLink, ChevronRight } from 'lucide-react';
import { SectionHeading } from './ui/Shared';
import { AllianceItem } from '../types';

export const StrategicAllianceSection: React.FC = () => {
  const alliances: AllianceItem[] = [
    {
      id: '3d', category: '受眾疆界擴張', icon: Box,
      partners: [{ name: 'Reallusion', logo: '' }],
      desc: '深入 3D 與動畫社群進行跨界共生。',
      color: 'border-orange-500', textColor: 'text-orange-500', bg: 'bg-orange-900/10'
    },
    {
      id: 'color', category: '品牌權威加持', icon: Palette,
      partners: [{ name: 'Pantone', logo: '' }],
      desc: '與色彩權威合作，強化專業依賴度。',
      link: 'https://adbeweblink.github.io/myproject/plan2026/pantone/pantone2026.html',
      color: 'border-pink-500', textColor: 'text-pink-500', bg: 'bg-pink-900/10'
    },
    {
      id: 'hardware', category: '硬體綑綁行銷', icon: Cpu,
      partners: [{ name: 'NVIDIA', logo: '' }, { name: 'AMD', logo: '' }],
      desc: '藉由軟硬體體驗會觸及高端玩家。',
      color: 'border-green-500', textColor: 'text-green-500', bg: 'bg-green-900/10'
    },
    {
      id: 'storage', category: '解決方案整合', icon: HardDrive,
      partners: [{ name: 'QNAP', logo: '' }],
      desc: '推廣 Adobe 軟體 + NAS 備份方案。',
      color: 'border-cyan-500', textColor: 'text-cyan-500', bg: 'bg-cyan-900/10'
    },
    {
      id: 'font', category: '智財合規推廣', icon: Type,
      partners: [{ name: 'DynaFont', logo: '' }],
      desc: '與字體商聯合推廣正版授權觀念。',
      color: 'border-blue-500', textColor: 'text-blue-500', bg: 'bg-blue-900/10'
    },
    {
      id: 'gear', category: '體驗優化行銷', icon: MousePointer2,
      partners: [{ name: 'Logitech', logo: '' }],
      desc: '在實體通路展示專屬快捷設定。',
      color: 'border-purple-500', textColor: 'text-purple-500', bg: 'bg-purple-900/10'
    }
  ];

  return (
    <section className="h-screen py-10 px-6 md:px-20 border-b border-white/5 bg-[#0a0a0a] flex flex-col justify-center overflow-hidden" id="alliance">
      <SectionHeading 
        title="Co-Marketing 生態行銷" 
        subtitle="Alliance Strategy" 
        color="bg-indigo-500" 
      />
      
      <div className="mb-8 w-full">
        <p className="text-gray-300 text-sm md:text-base max-w-3xl">
          運用代理優勢建立<strong className="text-white">「資源共享網絡」</strong>，將 Adobe 整合進頂尖硬體行銷場景中，實現 1+1 &gt; 2 的綜效。
        </p>
      </div>
      
      {/* Added p-2 to prevent hover clipping */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 p-2">
        {alliances.map((item) => {
           const Icon = item.icon;
           return (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden rounded-xl border ${item.color} ${item.bg} p-4 transition-all duration-300 cursor-pointer hover:shadow-xl hover:scale-[1.02] flex flex-col`}
              onClick={() => item.link ? window.open(item.link, '_blank') : null}
            >
              <div className="flex justify-between items-start mb-2">
                <div className={`p-1.5 rounded-lg bg-black/40 border border-white/10 ${item.textColor}`}><Icon size={18} /></div>
                {item.link && <ExternalLink size={12} className="text-gray-500" />}
              </div>
              <h3 className="text-sm font-bold text-white mb-1">{item.category}</h3>
              <p className="text-gray-500 text-[10px] leading-relaxed mb-2 line-clamp-2">{item.desc}</p>
              <div className="mt-auto flex items-center text-[9px] font-mono text-gray-600">
                <span className="flex-1 truncate">{item.link ? 'Landing Page' : 'Partnering'}</span>
                {item.link && <ChevronRight size={10} />}
              </div>
            </div>
           );
        })}
      </div>
    </section>
  );
};
