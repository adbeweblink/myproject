
import React, { useState } from 'react';
import { Check, X, Zap, Info, MousePointer2 } from 'lucide-react';
import { SectionHeading } from './ui/Shared';
import { FadeIn } from './ui/Motion';

const COMPARISON_DATA = [
  { feature: '影片剪輯', adobe: 'Premiere Pro', apple: 'Final Cut Pro', affinity: 'X', ai: 'Sora、Veo 3' },
  { feature: '特效合成', adobe: 'After Effects', apple: 'Motion', affinity: 'X', ai: 'Sora、Veo 3' },
  { feature: '轉檔輸出', adobe: 'Media Encoder', apple: 'Compressor', affinity: 'X', ai: 'X' },
  { feature: '影像編修', adobe: 'Photoshop', apple: 'Pixelmator Pro', affinity: 'Affinity Photo', ai: 'Midjourney、Gemini 3' },
  { feature: '向量插畫', adobe: 'Illustrator', apple: 'X', affinity: 'Affinity Designer', ai: 'Midjourney、Gemini 3' },
  { feature: '排版出版', adobe: 'InDesign', apple: 'Pages', affinity: 'Affinity Publisher', ai: 'NotebookLM' },
  { feature: '音樂音訊', adobe: 'Audition', apple: 'Logic Pro、MainStage', affinity: 'X', ai: 'Suno' },
  { feature: '文件流程', adobe: 'Acrobat Studio', apple: 'Keynote、Pages、Numbers', affinity: 'X', ai: 'NotebookLM' },
  { feature: '橫幅製作', adobe: 'Express', apple: 'X', affinity: 'Canva', ai: 'Gemini 3' },
];

const TOOL_DESCRIPTIONS: Record<string, string> = {
  'Premiere Pro': '業界標準的影片剪輯軟體，整合強大的 Firefly AI 功能與雲端協作，廣泛應用於電影、電視與網路創作者。',
  'Final Cut Pro': 'Apple 推出的專業非線性剪輯軟體，以磁性時間軸與 Apple Silicon 優化著稱，Mac 平台效能極佳。',
  'After Effects': '動態圖形與視覺特效的工業標準，支援強大的合成、追蹤與動畫製作，是 Motion Graphics 的首選。',
  'Motion': 'Apple 的動態圖形工具，專為 Final Cut Pro 設計，提供即時預覽與簡易的特效製作。',
  'Photoshop': '全球最知名的影像處理軟體，支援生成式填色 (Generative Fill) 與強大的圖層編輯功能。',
  'Pixelmator Pro': '專為 Mac 設計的影像編輯工具，利用 ML 技術簡化編輯流程，介面直觀。',
  'Affinity Photo': 'Serif 推出的專業修圖軟體，主打一次性買斷與跨平台高效能，是 PS 的強力競爭者。',
  'Illustrator': '向量繪圖的領導品牌，廣泛應用於插畫、Logo 與包裝設計，新版支援 Text to Vector 生成。',
  'Affinity Designer': '結合向量與點陣的設計軟體，流暢的縮放效能深受插畫家喜愛。',
  'InDesign': '專業排版與出版軟體，支援多頁面文件、電子書與互動式 PDF 製作，印刷業標準。',
  'Affinity Publisher': '新一代排版軟體，與 Photo/Designer 深度整合 (StudioLink) 可在同介面切換工具。',
  'NotebookLM': 'Google 的 AI 筆記助理，能快速摘要文件並回答問題，適合整理大量資料與學習。',
  'Midjourney': '目前公認圖像生成品質最高的 AI 工具之一，透過 Prompt 產生藝術級影像，風格多變。',
  'Gemini 3': 'Google 最新多模態 AI 模型，具備強大的圖像辨識與生成能力，並深度整合於 Workspace。',
  'Sora': 'OpenAI 的文字轉影片模型，能生成長達一分鐘的高畫質影片，物理模擬能力驚人 (尚未公測)。',
  'Veo 3': 'Google DeepMind 的影片生成模型，專注於高解析度與電影級的鏡頭語言控制，支援 1080p+。',
  'Audition': '專業音訊工作站，提供混音、降噪與 AI 語音增強功能，是廣播與 Podcast 的首選。',
  'Logic Pro': 'Apple 的全方位音樂製作軟體，內建大量虛擬樂器與 loops，適合專業音樂創作。',
  'Acrobat Studio': '全方位的 PDF 解決方案，不僅是閱讀器，更包含編輯、簽署、表單與資安保護功能。',
  'Express': 'Adobe 的線上設計工具，主打快速製作社群貼文、影片與海報，內建 Firefly AI 可一鍵生成素材。',
  'Canva': '極受歡迎的線上設計平台，提供海量模版與簡易操作，適合非設計背景用戶快速產出。',
  'Media Encoder': 'Adobe 的媒體轉檔工具，支援幾乎所有格式，可背景執行，與 Pr/Ae 無縫整合。',
  'Compressor': 'Final Cut Pro 的轉檔搭檔，提供進階的編碼設定與分散式編碼功能。',
  'Suno': '強大的 AI 音樂生成工具，能根據文字描述生成包含人聲與編曲的完整歌曲。',
  'Pages': 'Apple 的文書處理軟體，排版功能強大，適合製作精美的文件與電子書。',
  'Keynote': 'Apple 的簡報軟體，以華麗的過場動畫 (Magic Move) 聞名。',
  'Numbers': 'Apple 的試算表軟體，強調畫布式的自由排版。',
  'MainStage': '專為現場演出設計的音訊軟體，將 Mac 變身為強大的樂器與效果器。',
  'X': '此生態系目前無對應之專業級獨立應用程式。'
};

const BRAND_CONFIG: Record<string, { label: string, color: string, bg: string, border: string, text: string }> = {
  adobe: { 
    label: 'Adobe Creative Cloud', 
    color: 'text-red-500', 
    bg: 'bg-red-900/20', 
    border: 'border-red-500', 
    text: 'text-red-400' 
  },
  apple: { 
    label: 'Apple Creator Studio', 
    color: 'text-gray-300', 
    bg: 'bg-gray-800/30', 
    border: 'border-gray-500', 
    text: 'text-gray-300' 
  },
  affinity: { 
    label: 'Creative Affinity', 
    color: 'text-violet-400', 
    bg: 'bg-violet-900/20', 
    border: 'border-violet-500', 
    text: 'text-violet-300' 
  },
  ai: { 
    label: 'AI Tools', 
    color: 'text-emerald-400', 
    bg: 'bg-emerald-900/20', 
    border: 'border-emerald-500', 
    text: 'text-emerald-300' 
  }
};

interface ModalProps {
  tool: string;
  category: string;
  onClose: () => void;
}

const ToolModal: React.FC<ModalProps> = ({ tool, category, onClose }) => {
  // Handle multi-tool strings like "Sora、Veo 3"
  const tools = tool.split('、').map(t => t.trim());
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl w-full max-w-md p-6 shadow-2xl scale-100 animate-in zoom-in-95 duration-200">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X size={20} />
        </button>
        
        <div className="mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-white/10 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>

        <div className="space-y-6">
          {tools.map((t, idx) => {
             const desc = TOOL_DESCRIPTIONS[t] || TOOL_DESCRIPTIONS['default'];
             const isX = t === 'X';
             return (
              <div key={idx} className={tools.length > 1 ? 'border-b border-white/5 pb-4 last:border-0 last:pb-0' : ''}>
                <h3 className={`text-xl font-bold mb-2 flex items-center gap-2 ${isX ? 'text-gray-500' : 'text-white'}`}>
                  {isX ? <X size={20} /> : t}
                  {isX && <span className="text-sm">無對應工具</span>}
                </h3>
                {!isX && <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>}
                {isX && <p className="text-gray-600 text-xs italic">此生態系在此分類中暫無具備同等競爭力之產品。</p>}
              </div>
             );
          })}
        </div>
      </div>
    </div>
  );
};

export const CompetitorSection: React.FC = () => {
  const [selectedCol, setSelectedCol] = useState<string>('adobe');
  const [modalData, setModalData] = useState<{ tool: string, category: string } | null>(null);

  const columns = ['adobe', 'apple', 'affinity', 'ai'];

  return (
    <section className="min-h-screen py-10 pt-24 md:pt-10 px-6 md:px-20 border-b border-white/5 bg-[#080808] flex flex-col justify-center overflow-hidden relative" id="competitor">
      {/* Background Ambience */}
      <div className={`absolute inset-0 transition-colors duration-700 pointer-events-none opacity-20 bg-gradient-to-b from-transparent to-black ${
         selectedCol === 'adobe' ? 'from-red-900/10' : 
         selectedCol === 'apple' ? 'from-gray-800/10' :
         selectedCol === 'affinity' ? 'from-violet-900/10' : 'from-emerald-900/10'
      }`}></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col h-full justify-center">
        
        <div className="shrink-0 mb-8 md:mb-12">
          <SectionHeading 
            title="全方位生態系優勢" 
            subtitle="Comprehensive Comparison" 
            color="bg-red-600" 
          />
          <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
             請點選上方品牌欄位，比較 Adobe 與各家生態系之差異。<br/>
             點擊表格內的<strong className="text-white">應用程式名稱</strong>可查看詳細介紹。
          </p>
        </div>

        <FadeIn fullWidth>
          <div className="relative overflow-x-auto rounded-3xl border border-white/10 bg-[#111] shadow-2xl">
            
            {/* Table Header */}
            <div className="grid grid-cols-5 min-w-[900px] border-b border-white/10 bg-[#161616] sticky top-0 z-20">
              <div className="p-5 text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center justify-center">
                主要用途
              </div>
              
              {columns.map(col => {
                const config = BRAND_CONFIG[col];
                const isSelected = selectedCol === col;
                
                return (
                  <div 
                    key={col}
                    onClick={() => setSelectedCol(col)}
                    className={`
                      relative p-5 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-2 group
                      ${isSelected ? `${config.bg} border-t-4 ${config.border}` : 'border-t-4 border-transparent hover:bg-white/5'}
                    `}
                  >
                    <div className={`text-sm font-black transition-colors ${isSelected ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {config.label}
                    </div>
                    {isSelected && (
                      <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/40 ${config.text} border border-white/10 shadow-lg`}>
                        Selected
                      </div>
                    )}
                    {!isSelected && (
                      <div className="text-[10px] text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        <MousePointer2 size={10} /> Click to Focus
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Table Body */}
            <div className="divide-y divide-white/5 min-w-[900px]">
              {COMPARISON_DATA.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`
                    grid grid-cols-5 transition-colors group
                    ${idx % 2 === 0 ? 'bg-[#161616]' : 'bg-[#111]'}
                  `}
                >
                  {/* Feature Label */}
                  <div className="p-5 text-sm font-bold text-gray-400 flex items-center justify-center border-r border-white/5">
                    {row.feature}
                  </div>

                  {/* Columns */}
                  {columns.map(col => {
                    const cellData = row[col as keyof typeof row] as string;
                    const isX = cellData === 'X';
                    const isSelected = selectedCol === col;
                    const config = BRAND_CONFIG[col];

                    return (
                      <div 
                        key={col}
                        onClick={() => setModalData({ tool: cellData, category: row.feature })}
                        className={`
                          p-5 text-sm flex items-center justify-center cursor-pointer transition-all duration-300 relative
                          ${isSelected 
                            ? `bg-white/[0.02] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] font-bold text-white` 
                            : 'text-gray-500 hover:text-gray-300'
                          }
                          ${!isSelected && 'hover:bg-white/[0.02]'}
                        `}
                      >
                         {/* Selection Border Indicator (Vertical) */}
                         {isSelected && (
                           <div className={`absolute inset-y-0 left-0 w-[1px] ${config.bg.replace('/20', '/50')}`}></div>
                         )}
                         {isSelected && (
                           <div className={`absolute inset-y-0 right-0 w-[1px] ${config.bg.replace('/20', '/50')}`}></div>
                         )}

                         {isX ? (
                           <span className="text-red-500 font-mono text-lg opacity-60 select-none">
                             <X size={18} strokeWidth={3} />
                           </span>
                         ) : (
                           <span className={`flex items-center gap-2 ${isSelected ? config.text : ''}`}>
                             {cellData}
                             {isSelected && <Info size={12} className="opacity-50" />}
                           </span>
                         )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Table Footer / Legend */}
            <div className="p-4 border-t border-white/10 bg-[#0a0a0a] flex items-center justify-between min-w-[900px]">
               <div className="text-[10px] text-gray-600 font-mono">
                 * 表格僅供參考，實際功能以各原廠最新發布為準。
               </div>
               <div className="flex items-center gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div> Market Leader
                  </div>
                  <div className="flex items-center gap-1.5">
                    <X size={12} className="text-red-500"/> No Native App
                  </div>
                  <div className="flex items-center gap-1.5">
                     <MousePointer2 size={12} className="text-blue-500" /> Click for details
                  </div>
               </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Modal Overlay */}
      {modalData && (
        <ToolModal 
          tool={modalData.tool} 
          category={modalData.category} 
          onClose={() => setModalData(null)} 
        />
      )}
    </section>
  );
};
