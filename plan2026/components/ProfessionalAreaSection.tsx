
import React from 'react';
import { 
  Briefcase, 
  Layers, 
  PenTool, 
  Video, 
  Megaphone, 
  Globe, 
  Aperture,
  Box,
  Palette
} from 'lucide-react';
import { SectionHeading } from './ui/Shared';

const FIELDS = [
  { label: 'Marketing/Public Relations', value: 57, icon: Megaphone },
  { label: 'Social Media', value: 56, icon: Globe },
  { label: 'Creative / Design Ops', value: 48, icon: Layers },
  { label: 'Advertising', value: 45, icon: Aperture },
  { label: 'Web Design', value: 41, icon: Box },
  { label: 'Brand Identity', value: 40, icon: Briefcase },
  { label: 'Photography', value: 38, icon: Aperture },
  { label: 'Video / Editing', value: 35, icon: Video },
  { label: 'Signage Design', value: 35, icon: PenTool },
  { label: 'Visual Design', value: 32, icon: Palette },
];

const PRODUCTS = [
  { name: 'Photoshop', value: 76, icon: 'https://adbeweblink.github.io/myproject/images/ps.png', color: 'bg-[#31A8FF]' },
  { name: 'Illustrator', value: 65, icon: 'https://adbeweblink.github.io/myproject/images/Ai.png', color: 'bg-[#FF9A00]' },
  { name: 'InDesign', value: 55, icon: 'https://adbeweblink.github.io/myproject/images/Id.png', color: 'bg-[#FF3366]' },
  { name: 'After Effects', value: 50, icon: 'https://adbeweblink.github.io/myproject/images/Ae.png', color: 'bg-[#9999FF]' },
  { name: 'Premiere Pro', value: 48, icon: 'https://adbeweblink.github.io/myproject/images/Pr.png', color: 'bg-[#9999FF]' },
  { name: 'Brand Identity', value: 40, icon: null, isField: true }, // Placeholder logic handled in render
  { name: 'Firefly', value: 39, icon: 'https://adbeweblink.github.io/myproject/images/fl.png', color: 'bg-gradient-to-r from-blue-500 to-red-500' },
  { name: 'Adobe Express', value: 36, icon: 'https://adbeweblink.github.io/myproject/images/Express.png', color: 'bg-gradient-to-r from-purple-500 to-indigo-500' },
  { name: 'Lightroom', value: 33, icon: 'https://adbeweblink.github.io/myproject/images/lr.png', color: 'bg-[#31A8FF]' },
];

// Filter out the non-product entry for the product grid
const REAL_PRODUCTS = PRODUCTS.filter(p => !p.isField);

export const ProfessionalAreaSection: React.FC = () => {
  return (
    <section className="h-screen pt-20 pb-4 md:pt-24 md:pb-6 px-6 md:px-20 border-b border-white/5 bg-[#0a0a0a] flex flex-col overflow-hidden relative" id="domain">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full h-full flex flex-col relative z-10">
        
        {/* Header Section - Compressed */}
        <div className="shrink-0 mb-4 md:mb-6">
          <SectionHeading 
            title="參加者專業領域與工具分佈" 
            subtitle="Professional Fields & Tool Usage" 
            color="bg-gradient-to-r from-orange-500 to-red-500" 
          />
          <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed line-clamp-2 md:line-clamp-none">
            這不僅是一群設計師，更是一群<strong className="text-white">「跨領域多工」</strong>的專業決策者。
            數據顯示受眾高度依賴 Adobe 生態系來完成從品牌、行銷到影音的全方位任務。
          </p>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch">
          
          {/* LEFT: Professional Fields (Data Bars) */}
          <div className="flex flex-col h-full min-h-0">
            <h3 className="shrink-0 text-lg md:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1 h-5 md:h-6 bg-red-500 rounded-full"></span>
              專業範疇 (Professional Scope)
            </h3>
            
            <div className="flex-1 min-h-0 bg-[#111] border border-white/10 rounded-3xl p-4 md:p-6 relative overflow-hidden flex flex-col justify-between">
               {/* Decorative Background */}
               <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>

               {FIELDS.map((field, idx) => (
                 <div key={idx} className="relative group">
                    <div className="flex justify-between items-end mb-1 relative z-10">
                       <span className="text-xs md:text-sm font-bold text-gray-300 flex items-center gap-2 group-hover:text-white transition-colors">
                          <field.icon size={12} className="text-gray-500" />
                          {field.label}
                       </span>
                       <span className="text-xs md:text-sm font-black text-red-400">{field.value}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden relative z-10">
                       <div 
                          className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.3)] transition-all duration-1000 ease-out"
                          style={{ width: `${field.value}%` }}
                       />
                    </div>
                 </div>
               ))}
            </div>
            <div className="shrink-0 mt-2 text-[10px] text-gray-500 text-center">
               * 數值加總超過 100% 代表該受眾具備多重專業身分 (Slash)
            </div>
          </div>

          {/* RIGHT: Product Usage (Icon Grid) */}
          <div className="flex flex-col h-full min-h-0">
            <h3 className="shrink-0 text-lg md:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1 h-5 md:h-6 bg-blue-500 rounded-full"></span>
              Adobe 產品滲透率 (Product Usage)
            </h3>

            <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar pr-1">
                <div className="grid grid-cols-1 gap-2 md:gap-3">
                {REAL_PRODUCTS.map((prod, idx) => (
                    <div 
                        key={idx} 
                        className="group bg-[#111] border border-white/10 rounded-xl p-2.5 md:p-3 flex items-center gap-3 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Product Icon */}
                        <div className="relative shrink-0 z-10 group-hover:scale-110 transition-transform duration-300">
                            <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-[#1a1a1a] p-1 border border-white/10 shadow-lg">
                                <img src={prod.icon || ''} alt={prod.name} className="w-full h-full object-contain rounded-md" />
                            </div>
                        </div>

                        {/* Progress & Label */}
                        <div className="flex-1 relative z-10 min-w-0">
                            <div className="flex justify-between items-center mb-1.5">
                                <h4 className="text-sm font-bold text-white truncate">{prod.name}</h4>
                                <span className="text-lg font-black text-blue-400">{prod.value}%</span>
                            </div>
                            
                            {/* Progress Bar Container */}
                            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full rounded-full ${prod.color} opacity-80 group-hover:opacity-100 shadow-lg transition-all duration-1000 ease-out`}
                                    style={{ width: `${prod.value}%` }}
                                />
                            </div>
                        </div>

                        {/* Glow Effect on Hover */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-in-out`}></div>
                    </div>
                ))}
                </div>
            </div>
            
            {/* Persuasive Summary Box - Compact */}
            <div className="shrink-0 mt-3 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 p-3 rounded-xl flex items-start gap-3 backdrop-blur-sm">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 shrink-0 hidden md:block">
                   <Layers size={16} />
                </div>
                <div>
                   <h5 className="text-[10px] md:text-xs font-bold text-blue-300 uppercase tracking-wider mb-0.5">Ecosystem Dominance</h5>
                   <p className="text-[10px] md:text-xs text-gray-300 leading-relaxed line-clamp-2 md:line-clamp-none">
                      高達 <span className="text-white font-bold">76%</span> 的受眾使用 Photoshop，且多數同時掌握 3 種以上軟體。
                      這意味著這是一群對 <strong className="text-white">高規硬體</strong> 與 <strong className="text-white">周邊設備</strong> 有高度依賴的重度使用者。
                   </p>
                </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
