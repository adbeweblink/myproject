
import React, { useState } from 'react';
import { 
  Printer, 
  Clapperboard, 
  FileSignature, 
  AlertTriangle, 
  XCircle, 
  CheckCircle2, 
  ChevronDown, 
  Terminal
} from 'lucide-react';
import { SectionHeading } from './ui/Shared';

const MOAT_DATA = [
  {
    id: 'print',
    title: '平面設計：印刷與實體包裝',
    subtitle: 'Physical Production Standards',
    icon: Printer,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500',
    bgGradient: 'from-cyan-900/20 to-blue-900/20',
    killerCommand: "麻煩給我這款包裝的 CMYK 原始完稿檔 (.ai)。需設定 Spot Color 燙金與白墨防透。",
    specs: [
      "結構：刀模線 (Die-cut) 設疊印 (Overprint)",
      "色準：Pantone 877C (銀) + K100 直壓",
      "交付：300dpi, 3mm 出血, 轉外框, EAN-13 條碼",
      "全域：設定段落樣式 (Paragraph Styles)"
    ],
    aiFail: [
      "AI 不懂「燙金版」和「白墨」物理圖層",
      "AI 生成 RGB 混色黑，印刷小字會糊掉",
      "AI 生成的條碼無法被掃描槍讀取"
    ]
  },
  {
    id: 'motion',
    title: '動態剪輯：訊號合規與標準',
    subtitle: 'Broadcast Compliance',
    icon: Clapperboard,
    color: 'text-purple-400',
    borderColor: 'border-purple-500',
    bgGradient: 'from-purple-900/20 to-pink-900/20',
    killerCommand: "這支片子要進機房排播，請依廣播規範交付。聲畫分軌 (Stems) 且響度控制在 -24 LKFS。",
    specs: [
      "聲音：輸出 OMF/AAF，對白/音樂徹底分軌",
      "訊號：Rec.709 (16-235) 安全範圍，禁溢出",
      "透明度：ProRes 4444 with Alpha 直疊",
      "鎖定：鎖死動畫，只開放文字欄位 (MOGRT)"
    ],
    aiFail: [
      "AI 生成視訊音訊糊在一起，無法進混音室",
      "AI 顏色隨機，超出廣播安全範圍會爆音閃爍",
      "AI 無法製作可替換內容的動態模組"
    ]
  },
  {
    id: 'doc',
    title: '資安合規：文件簽署與法效',
    subtitle: 'Legal & Accessibility',
    icon: FileSignature,
    color: 'text-red-400',
    borderColor: 'border-red-500',
    bgGradient: 'from-red-900/20 to-orange-900/20',
    killerCommand: "這是跨國併購合約。簽名需具備數位憑證 (Digital ID)，個資需徹底抹除 (Redact)。",
    specs: [
      "法效：需含時間戳記與 PKI 金鑰憑證",
      "資安：徹底抹除數據 (二進位抹除) 非色塊遮蓋",
      "無障礙：符合 PDF/UA (ISO 14289) 標籤樹",
      "邏輯：互動式表單，JS 自動加總檢核"
    ],
    aiFail: [
      "AI 給的是圖片而非憑證，無法律效力",
      "AI 只能掩蓋像素，無法徹底刪除代碼數據",
      "AI PDF 缺乏 Tag Tree 結構，無法通過政府檢測"
    ]
  }
];

export const ThreeMoatsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <section className="min-h-screen py-10 pt-24 md:pt-10 px-6 md:px-20 border-b border-white/5 bg-[#080808] flex flex-col justify-center relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col h-full justify-center">
        
        {/* Header - Centered Layout */}
        <div className="mb-10 shrink-0 flex flex-col items-center text-center">
          <div className="w-16 h-1.5 bg-gray-200 mb-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          <p className="text-gray-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-2 animate-pulse">
            The Technical Fortresses
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-balance drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6">
            三大技術堡壘
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
            當客戶質疑「為什麼不用免費 AI 生成就好？」時，
            請展示以下 <strong className="text-white">工業標準 (Industry Standards)</strong> 的殘酷現實。
            AI 能夠生成像素，但無法生成符合物理製程與法規的交付檔案。
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {MOAT_DATA.map((item) => (
            <div 
              key={item.id}
              className={`
                group relative rounded-2xl border border-white/10 bg-[#111] overflow-hidden transition-all duration-500
                hover:border-opacity-50 hover:-translate-y-2
                ${activeTab === item.id ? 'ring-1 ring-white/20' : ''}
              `}
              onMouseEnter={() => setActiveTab(item.id)}
              onMouseLeave={() => setActiveTab(null)}
            >
              {/* Gradient BG */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

              <div className="relative p-6 md:p-8 flex flex-col h-full">
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-black/50 border border-white/10 ${item.color} shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white leading-tight">{item.title}</h3>
                    <div className={`text-[10px] font-bold uppercase tracking-widest ${item.color} opacity-80`}>{item.subtitle}</div>
                  </div>
                </div>

                {/* The Killer Command (Red Zone) */}
                <div className="bg-red-900/10 border-l-2 border-red-500 p-4 rounded-r-lg mb-6 relative">
                  <div className="absolute -left-[9px] -top-3 bg-[#111] text-red-500 rounded-full p-1 border border-red-900/50">
                     <AlertTriangle size={12} fill="currentColor" className="text-black" />
                  </div>
                  <div className="text-[10px] text-red-400 font-bold uppercase tracking-wider mb-1">Client Demand (甲方指令)</div>
                  <p className="text-gray-200 text-xs font-mono leading-relaxed">
                    "{item.killerCommand}"
                  </p>
                </div>

                {/* Tech Specs (Code Style) */}
                <div className="space-y-3 mb-6 flex-1">
                   {item.specs.map((spec, i) => (
                     <div key={i} className="flex items-start gap-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                        <Terminal size={12} className={`mt-0.5 shrink-0 ${item.color}`} />
                        <span className="font-mono">{spec}</span>
                     </div>
                   ))}
                </div>

                {/* AI Failure (Bottom) */}
                <div className="mt-auto pt-4 border-t border-white/5">
                   <div className="flex items-center gap-2 mb-2">
                      <XCircle size={14} className="text-red-500" />
                      <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider">Why AI Fails (AI 做不到)</span>
                   </div>
                   <ul className="space-y-1.5 pl-1">
                      {item.aiFail.map((fail, i) => (
                        <li key={i} className="text-[11px] text-gray-500 leading-tight list-disc list-inside marker:text-red-900">
                           {fail}
                        </li>
                      ))}
                   </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* The Golden Sentence (Summary) - Refined Layout */}
        <div className="relative w-full max-w-4xl mx-auto text-center px-4 mt-8">
           
           <h2 className="text-base md:text-xl font-black text-white mb-6 leading-normal tracking-tight">
             如果客戶問：「為什麼要花錢買 Adobe，不直接用免費 AI 生成就好？」
           </h2>

           <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-2xl text-gray-300 font-medium">
                「AI 是負責<span className="text-white border-b-2 border-yellow-500 mx-2">產生靈感</span>的，<br className="md:hidden" />
                Adobe 是負責<span className="text-white border-b-2 border-blue-500 mx-2">對靈感負責</span>的。」
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-4">
                 <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs md:text-sm">
                    無法修改的設計 ➝ 叫 <span className="text-white font-bold">藝術品</span>
                 </div>
                 <div className="hidden md:block text-gray-600 font-bold">vs</div>
                 <div className="px-6 py-3 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-200 text-xs md:text-sm shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    可以精準修改的設計 ➝ 才叫 <span className="text-white font-bold">商品</span>
                 </div>
              </div>
              
              <div className="mt-6 inline-block">
                 <p className="text-sm md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400 border border-white/20 px-8 py-3 rounded-xl backdrop-blur-md bg-white/5 shadow-2xl">
                    Adobe 就是把藝術品變成商品的那個<span className="text-blue-400 ml-2">加工廠</span>
                 </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};
