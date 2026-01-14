
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  ExternalLink, 
  Wrench, 
  Gamepad2, 
  Target, 
  CheckCircle2, 
  Zap, 
  Heart, 
  Clock, 
  MousePointer2,
  FlaskConical,
  ChevronLeft,
  ChevronRight,
  Code
} from 'lucide-react';
import { LabProject } from '../types';

const LAB_PROJECTS: LabProject[] = [
  // --- Tools ---
  {
    id: 1, type: 'tool', title: "Adobe 軟體採購規格生成器",
    description: "專為政府教育單位設計，一鍵生成合規的軟體採購硬體規格書。",
    link: "https://adbeweblink.github.io/myproject/adbespec2026.html",
    purpose: "自動產出合規標案規格文件。",
    problemSolved: "解決人工查閱規格耗時易錯。",
    efficiency: "撰寫時間縮短至30秒。"
  },
  {
    id: 2, type: 'tool', title: "Adobe Firefly 點數計算機",
    description: "整合官方與第三方模型費率，精準預估每月 AI 算力成本與額度。",
    link: "https://adbeweblink.github.io/myproject/aipointcalculator.html",
    purpose: "協助團隊精算 AI 點數消耗預算。",
    problemSolved: "解決複雜模型費率難以計算。",
    efficiency: "三分鐘完成預算表。"
  },
  {
    id: 10, type: 'tool', title: "Adobe CC 最新功能電子報",
    description: "針對 A4 列印優化的功能快報，前端即時生成 PDF，資訊零時差。",
    link: "https://adbeweblink.github.io/myproject/newfeatures.html",
    purpose: "提供標準化的一鍵生成功能週報。",
    problemSolved: "克服網頁轉存 PDF 排版錯亂。",
    efficiency: "即時渲染高解析度列印文件。"
  },
  {
    id: 13, type: 'tool', title: "Adobe 台灣經銷商搜尋器",
    description: "整合全台經銷商資料庫，支援地區與專業領域篩選，快速媒合廠商。",
    link: "https://adbeweblink.github.io/myproject/reseller.html",
    purpose: "建立透明名錄，快速找到窗口。",
    problemSolved: "解決官方列表缺乏在地資訊。",
    efficiency: "秒速媒合服務商。"
  },
  {
    id: 4, type: 'tool', title: "Adobe 企業方案規格比較",
    description: "專為 B2B 銷售設計，針對橫式列印優化，清晰呈現團隊與企業版差異。",
    link: "https://adbeweblink.github.io/myproject/cc-biz-matrix.html",
    purpose: "協助客戶釐清版本權益差異。",
    problemSolved: "解決複雜授權與資安規範。",
    efficiency: "自動化收集潛在商機。"
  },
  {
    id: 5, type: 'tool', title: "Adobe 教育授權方案比較",
    description: "專為校園採購設計，深度解析裝置授權與指名授權差異，適合校務提案。",
    link: "https://adbeweblink.github.io/myproject/cc-edu-matrix.html",
    purpose: "協助學校釐清裝置與指名授權。",
    problemSolved: "解決電腦教室與 BYOD 難題。",
    efficiency: "提供清晰 A4 版面，縮短溝通。"
  },
  {
    id: 6, type: 'tool', title: "Firefly 點數方案比較表",
    description: "支援獨立訂閱與加購包切換，協助企業精算 AI 算力成本與版權權益。",
    link: "https://adbeweblink.github.io/myproject/firefly-biz-matrix.html",
    purpose: "協助釐清點數消耗規則。",
    problemSolved: "解決企業對點數重置焦慮。",
    efficiency: "將複雜計費邏輯視覺化。"
  },
  {
    id: 16, type: 'tool', title: "Lab 工具影音教學專區",
    description: "匯集所有 Weblink Lab 開發工具的實戰教學影片，從規格生成到點數計算的影音懶人包。",
    link: "https://www.youtube.com/playlist?list=PL_LabTutorials", 
    purpose: "視覺化呈現工具操作流程。",
    problemSolved: "解決圖文說明難以傳達的動態細節。",
    efficiency: "縮短經銷商教育訓練時間。"
  },
  // --- Games ---
  {
    id: 15, type: 'game', title: "設計師職場生存模擬器",
    description: "這不是普通的計算機，這是一場職場生存遊戲。輸入數值，系統判定你的身價。",
    link: "https://adbeweblink.github.io/myproject/survivaltest.html",
    appeal: "將枯燥薪資計算轉化為共鳴遊戲。",
    stickiness: "透過毒雞湯引發轉發慾望。",
    features: "互動滑桿、診斷系統。"
  },
  {
    id: 14, type: 'game', title: "奧多比轉轉樂",
    description: "基於 Three.js 的 3D 魔術方塊，將軟體圖示映射至六面，考驗空間邏輯。",
    link: "https://adbeweblink.github.io/myproject/twist.html",
    appeal: "結合經典魔術方塊，強化品牌印象。",
    stickiness: "競速解謎具高重玩性。",
    features: "WebGL 3D 渲染。"
  },
  {
    id: 7, type: 'game', title: "奧多比跳跳樂",
    description: "基於 Three.js 的 3D 蓄力跳躍，玩家需控制角色在軟體積木間精準跳躍。",
    link: "https://adbeweblink.github.io/myproject/jump.html",
    appeal: "沉浸式 3D 互動，建立認知。",
    stickiness: "蓄力手感與連擊機制。",
    features: "物理拋物線模擬。"
  },
  {
    id: 9, type: 'game', title: "奧多比合合樂",
    description: "類西瓜遊戲的物理合成玩法，利用碰撞機制將低階圖示進化為高階圖示。",
    link: "https://adbeweblink.github.io/myproject/merge.html",
    appeal: "合成快感結合物理碰撞。",
    stickiness: "炸彈道具增加變數。",
    features: "Matter.js 物理引擎。"
  },
  {
    id: 3, type: 'game', title: "奧多比碰碰樂",
    description: "經典 2048 玩法，滑動合併圖示，從 Acrobat 一路進化至 Creative Cloud。",
    link: "https://adbeweblink.github.io/myproject/bump.html",
    appeal: "將枯燥列表轉化為趣味進化。",
    stickiness: "內建圖鑑收集與排行榜。",
    features: "原生音效、RWD 手勢操作。"
  },
  {
    id: 8, type: 'game', title: "奧多比消消樂",
    description: "結合 LINE 生態圈的消除遊戲，遊玩中置入軟體冷知識，達到寓教於樂。",
    link: "https://adbeweblink.github.io/myproject/matchBox.html",
    appeal: "轉化圖示為遊戲元素，置入教學。",
    stickiness: "連擊回饋與好友分享。",
    features: "LINE LIFF 整合、Web Audio。"
  },
  {
    id: 11, type: 'game', title: "Pantone 色彩極限挑戰",
    description: "考驗色彩敏銳度，找出差異色塊。失敗時透過學習年度代表色獲得復活。",
    link: "https://adbeweblink.github.io/myproject/pantone.html",
    appeal: "結合色彩訓練與科普。",
    stickiness: "難度指數級縮小，激發好勝心。",
    features: "動態色差演算法。"
  },
  {
    id: 12, type: 'game', title: "Adobe 知識王挑戰賽",
    description: "結合 LINE LIFF 的問答遊戲，測試品牌知識，滿分可獲得專屬獎勵誘因。",
    link: "https://adbeweblink.github.io/myproject/quiz.html",
    appeal: "將生硬知識轉化為挑戰。",
    stickiness: "即時回饋與滿分特效。",
    features: "React 互動介面。"
  }
];

const getPatternSvg = (id: number) => {
    const patterns: Record<number, string> = {
        1: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="p1" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M10 10h10v2h-8v8h-2v-10z" fill="none" stroke="currentColor" stroke-width="0.8" opacity="0.3"/></pattern></defs>
                <rect width="100%" height="100%" fill="url(#p1)" class="text-white"/>
                <path d="M0 50 Q 25 25 50 50 T 100 50" fill="none" stroke="white" stroke-width="1" opacity="0.2" />
            </svg>`,
        2: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="p2" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="none" stroke="currentColor" stroke-width="0.3" opacity="0.25"/></pattern></defs>
                <rect width="100%" height="100%" fill="url(#p2)" class="text-white"/>
            </svg>`,
        10: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                 <line x1="10" y1="20" x2="90" y2="20" stroke="white" stroke-width="3" opacity="0.25"/>
                 <line x1="10" y1="40" x2="90" y2="40" stroke="white" stroke-width="3" opacity="0.25"/>
                 <line x1="10" y1="60" x2="90" y2="60" stroke="white" stroke-width="3" opacity="0.25"/>
                 <line x1="10" y1="80" x2="50" y2="80" stroke="white" stroke-width="3" opacity="0.25"/>
             </svg>`,
        13: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="20" cy="50" r="4" fill="white" opacity="0.3"/>
                 <circle cx="50" cy="20" r="4" fill="white" opacity="0.3"/>
                 <circle cx="80" cy="60" r="4" fill="white" opacity="0.3"/>
                 <line x1="20" y1="50" x2="50" y2="20" stroke="white" stroke-width="1" opacity="0.2"/>
                 <line x1="50" y1="20" x2="50" y2="60" stroke="white" stroke-width="1" opacity="0.2"/>
                 <line x1="20" y1="50" x2="50" y2="80" stroke="white" stroke-width="1" opacity="0.2"/>
             </svg>`,
        4: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="20" height="60" rx="2" fill="white" opacity="0.2"/>
                <rect x="50" y="10" width="20" height="70" rx="2" fill="white" opacity="0.3"/>
                <line x1="10" y1="90" x2="90" y2="90" stroke="white" stroke-width="2" opacity="0.3"/>
            </svg>`,
        5: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="40" width="10" height="40" fill="white" opacity="0.2"/>
                <rect x="35" y="30" width="10" height="50" fill="white" opacity="0.3"/>
                <rect x="50" y="50" width="10" height="30" fill="white" opacity="0.2"/>
                <rect x="65" y="20" width="10" height="60" fill="white" opacity="0.25"/>
            </svg>`,
        6: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="white" opacity="0.25"/>
                <circle cx="20" cy="20" r="6" fill="white" opacity="0.3"/>
                <circle cx="80" cy="80" r="4" fill="white" opacity="0.3"/>
            </svg>`,
        16: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                 <circle cx="50" cy="50" r="25" fill="none" stroke="white" stroke-width="1.5" opacity="0.2"/>
                 <path d="M42 38 L65 50 L42 62 Z" fill="white" opacity="0.3"/>
                 <rect x="15" y="25" width="70" height="50" rx="4" fill="none" stroke="white" stroke-width="0.5" opacity="0.15"/>
                 <circle cx="20" cy="50" r="2" fill="white" opacity="0.2"/>
                 <circle cx="80" cy="50" r="2" fill="white" opacity="0.2"/>
             </svg>`,
        15: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 90 L30 70 L50 80 L70 40 L90 20" fill="none" stroke="white" stroke-width="2" opacity="0.3"/>
                <rect x="10" y="90" width="80" height="2" fill="white" opacity="0.2"/>
                <rect x="10" y="10" width="2" height="80" fill="white" opacity="0.2"/>
                <circle cx="30" cy="70" r="3" fill="white" opacity="0.3"/>
                <circle cx="50" cy="80" r="3" fill="white" opacity="0.3"/>
                <circle cx="70" cy="40" r="3" fill="white" opacity="0.3"/>
                <circle cx="90" cy="20" r="3" fill="white" opacity="0.3"/>
            </svg>`,
        14: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                 <path d="M50 10 L85 30 L50 50 L15 30 Z" fill="none" stroke="white" stroke-width="1.5" opacity="0.3"/>
                 <path d="M15 30 L15 70 L50 90 L50 50 Z" fill="white" opacity="0.1"/>
                 <path d="M85 30 L85 70 L50 90 L50 50 Z" fill="white" opacity="0.2"/>
             </svg>`,
        7: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="70" width="20" height="20" fill="white" opacity="0.2"/>
                <rect x="40" y="50" width="20" height="20" fill="white" opacity="0.3"/>
                <rect x="70" y="30" width="20" height="20" fill="white" opacity="0.4"/>
            </svg>`,
        9: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="50" r="25" fill="none" stroke="white" stroke-width="2" opacity="0.3"/>
                <circle cx="70" cy="50" r="25" fill="none" stroke="white" stroke-width="2" opacity="0.3"/>
                <circle cx="50" cy="50" r="15" fill="white" opacity="0.2"/>
            </svg>`,
        3: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="35" height="35" rx="5" fill="white" opacity="0.2"/>
                <rect x="55" y="10" width="35" height="35" rx="5" fill="white" opacity="0.2"/>
                <rect x="10" y="55" width="35" height="35" rx="5" fill="white" opacity="0.2"/>
                <rect x="55" y="55" width="35" height="35" rx="5" fill="white" opacity="0.3"/>
            </svg>`,
        8: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="15" width="20" height="20" fill="white" opacity="0.2"/>
                <circle cx="50" cy="25" r="12" fill="white" opacity="0.2"/>
                <polygon points="85,35 95,15 75,15" fill="white" opacity="0.2"/>
                <rect x="45" y="55" width="20" height="20" fill="white" opacity="0.3"/>
            </svg>`,
        11: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                 <rect x="15" y="10" width="20" height="35" fill="white" opacity="0.2"/>
                 <rect x="40" y="10" width="20" height="35" fill="white" opacity="0.3"/>
                 <rect x="65" y="10" width="20" height="35" fill="white" opacity="0.2"/>
                 <rect x="15" y="55" width="20" height="35" fill="white" opacity="0.3"/>
                 <rect x="40" y="55" width="20" height="35" fill="white" opacity="0.2"/>
                 <rect x="65" y="55" width="20" height="35" fill="white" opacity="0.3"/>
             </svg>`,
        12: `<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                 <text x="50" y="70" font-family="sans-serif" font-size="80" font-weight="bold" fill="white" opacity="0.2" text-anchor="middle">?</text>
                 <circle cx="20" cy="20" r="6" fill="white" opacity="0.2"/>
                 <circle cx="80" cy="80" r="8" fill="white" opacity="0.2"/>
             </svg>`
    };
    return patterns[id] || "";
};

export const BusinessAccelerationLab: React.FC = () => {
  const [filter, setFilter] = useState<'tool' | 'game'>('tool');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => LAB_PROJECTS.filter(p => p.type === filter), [filter]);

  const isTool = filter === 'tool';
  const bgColor = isTool ? 'bg-gray-900' : 'bg-[#1a0500]';
  const accentColor = isTool ? 'from-blue-600' : 'from-orange-600';
  const btnColor = isTool ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20' : 'bg-orange-500 hover:bg-orange-400 shadow-orange-500/20';
  const accentText = isTool ? 'group-hover:text-blue-400' : 'group-hover:text-orange-400';
  const headingGradient = isTool ? 'from-blue-400 to-cyan-300' : 'from-orange-400 to-yellow-400';

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -350 : 350,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const section = document.getElementById('lab');
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

  return (
    <section className={`min-h-screen transition-colors duration-700 overflow-hidden flex flex-col justify-start md:justify-center ${bgColor} pt-24 md:pt-32`} id="lab">
      <div className="max-w-7xl mx-auto px-6 md:px-20 shrink-0 mb-6 relative w-full">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[9px] tracking-widest uppercase mb-2">
            <FlaskConical size={10} /> Lab Experiment
          </div>
          <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r ${headingGradient} transition-all duration-300`}>
            {isTool ? '企業級生產力工具' : '品牌互動遊戲體驗'}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-xs md:text-sm leading-relaxed whitespace-nowrap">
            {isTool ? '協助企業降低使用外部開源模型的門檻，並將工作流安全地收斂回 Adobe 的合規體系。（陸續審核ing）' : '將品牌轉化為沉浸式互動體驗，透過遊戲化機制提升黏著度與品牌認知。（待評估審核）'}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="inline-flex bg-gray-800 p-1 rounded-lg border border-gray-700 shadow-sm">
            <button 
              onClick={() => setFilter('tool')}
              className={`flex items-center gap-2 px-6 py-2 rounded-md text-xs font-bold transition-all duration-200 ${isTool ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
            >
              <Wrench size={14} /> <span>生產力工具</span>
            </button>
            <button 
              onClick={() => setFilter('game')}
              className={`flex items-center gap-2 px-6 py-2 rounded-md text-xs font-bold transition-all duration-200 ${!isTool ? 'bg-orange-500 text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-gray-700'}`}
            >
              <Gamepad2 size={14} /> <span>互動小遊戲</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 px-6 md:px-20 -mx-6 md:-mx-20 items-stretch"
        >
          <div className="flex gap-6 px-6 md:px-20 items-stretch">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className={`
                  snap-center shrink-0 w-[300px]
                  bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-500
                  flex flex-col transition-all duration-300 group
                  hover:-translate-y-1 hover:shadow-2xl
                `}
              >
                {/* Header with Pattern */}
                <div className={`h-36 relative overflow-hidden bg-gradient-to-br ${accentColor} to-gray-900`}>
                  <div className="absolute inset-0 transition-transform duration-[8000ms] ease-in-out origin-center group-hover:scale-115" dangerouslySetInnerHTML={{ __html: getPatternSvg(project.id) }} />
                  <div className="absolute inset-0 flex items-center justify-center z-10 transform group-hover:scale-105 transition-transform duration-500">
                     <div className="bg-white p-1 rounded-lg shadow-lg">
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(project.link)}`} alt="QR" className="w-20 h-20" />
                     </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none"></div>
                </div>

                <div className="p-5 flex-1 flex flex-col relative">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={`w-full flex items-center justify-center space-x-2 text-white py-2.5 rounded-md transition-all duration-300 font-bold mb-5 shadow-md transform active:scale-95 ${btnColor}`}>
                    <ExternalLink size={16} />
                    <span>{isTool ? '開啟工具連結' : '開啟遊戲連結'}</span>
                  </a>

                  <div className="mb-3">
                     <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-gray-700 text-gray-300 border border-gray-600 inline-block">
                        {isTool ? 'Utility' : 'Game'}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold text-gray-100 transition-colors leading-snug mb-2 ${accentText}`}>{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                    {project.description}
                  </p>

                  <div className="mt-auto grid grid-cols-1 gap-y-3 pt-4 border-t border-gray-700/50">
                    {isTool ? (
                      <>
                        <div className="flex items-start space-x-3">
                            <Target size={14} className="text-blue-400 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">用途 / 目的</p>
                                <p className="text-sm text-gray-300 leading-snug">{project.purpose}</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <CheckCircle2 size={14} className="text-yellow-400 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">解決困難</p>
                                <p className="text-sm text-gray-300 leading-snug">{project.problemSolved}</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Zap size={14} className="text-green-400 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">效率提升</p>
                                <p className="text-sm font-bold text-green-300 leading-snug">{project.efficiency}</p>
                            </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-start space-x-3">
                            <Heart size={14} className="text-orange-400 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">主要訴求</p>
                                <p className="text-sm text-gray-300 leading-snug">{project.appeal}</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Clock size={14} className="text-amber-400 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">遊戲黏著度</p>
                                <p className="text-sm font-bold text-yellow-200 leading-snug">{project.stickiness}</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <MousePointer2 size={14} className="text-yellow-400 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">特色功能</p>
                                <p className="text-sm text-gray-300 leading-snug">{project.features}</p>
                            </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Placeholder for 'In Progress' */}
            <div className="snap-center shrink-0 w-[300px] border-2 border-dashed border-gray-700 rounded-lg flex flex-col items-center justify-center p-8 transition-colors cursor-default hover:bg-gray-800/30 group">
                <Code className="w-12 h-12 mb-4 opacity-50 text-gray-600 group-hover:text-gray-500 transition-colors" />
                <p className="text-sm font-medium text-gray-500 mt-4">Lab Experiment In Progress...</p>
            </div>
          </div>
        </div>

        {/* Absolute Navigation Buttons */}
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 bg-black/50 text-white hover:bg-white/10 transition z-20 backdrop-blur-sm"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 bg-black/50 text-white hover:bg-white/10 transition z-20 backdrop-blur-sm"
          aria-label="Scroll Right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};
