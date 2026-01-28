
import React, { useState } from 'react';
import { 
  Lock, 
  TrendingUp, 
  Zap, 
  Building2, 
  Star, 
  Target, 
  Globe, 
  BarChart3,
  Users,
  LayoutGrid,
  CreditCard,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const ALLOWED_PARTNERS = [
  "ACER", "ADOBE", "AMD", "APPLE", "ARPHIC", "ASUSTOR", "BENQ", 
  "DYNAFONT", "GIGABYTE", "LENOVO", "LOGITECH", "MONOTYPE", "MOTIONER", 
  "MSI", "NVIDIA", "PANTONE", "QNAP", "REALLUSION", "SANDISK", "SEAGATE", 
  "SONY", "WACOM", "WD"
];

const CONFIRMED_PARTNERS = [
  "QNAP", "NVIDIA", "ADOBE", "AMD", "PANTONE", "MSI", "REALLUSION"
];

const PLANS = [
  {
    id: 'silver',
    name: 'SILVER',
    nameCn: '白銀級方案',
    price: '3K USD',
    reco: false,
    features: [
       { label: '專題演講', value: '--', highlight: false, icon: Star, inactive: true },
       { label: '實體攤位', value: '1 張', highlight: false, icon: Building2 },
       { label: '名單品質', value: '問卷潛客', highlight: false, icon: Users },
       { label: '品牌曝光', value: '背板 LOGO', highlight: false, icon: Target },
    ],
    bg: 'bg-gradient-to-br from-gray-500/10 via-gray-400/5 to-transparent',
    border: 'border-gray-500/30',
    shadow: 'shadow-[0_0_40px_rgba(200,200,200,0.05)]',
    accent: 'text-gray-300',
    btnColor: 'bg-white/10 hover:bg-white/20 text-white'
  },
  {
    id: 'platinum',
    name: 'PLATINUM',
    nameCn: '白金級旗艦',
    price: '6K USD',
    reco: true,
    features: [
       { label: '專題演講', value: '20 mins', highlight: true, icon: Star },
       { label: '實體攤位', value: '2 張', highlight: true, icon: Building2 },
       { label: '名單品質', value: 'MQL 高價值', highlight: true, icon: Users },
       { label: '品牌曝光', value: '影片 & 問卷', highlight: true, icon: Target },
    ],
    bg: 'bg-gradient-to-br from-blue-600/20 via-indigo-500/10 to-transparent',
    border: 'border-blue-400/50',
    shadow: 'shadow-[0_0_60px_rgba(59,130,246,0.25)]',
    accent: 'text-blue-300',
    btnColor: 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/50'
  },
  {
    id: 'gold',
    name: 'GOLD',
    nameCn: '黃金級方案',
    price: '4K USD',
    reco: false,
    features: [
       { label: '專題演講', value: '--', highlight: false, icon: Star, inactive: true },
       { label: '實體攤位', value: '2 張', highlight: false, icon: Building2 },
       { label: '名單品質', value: '問卷完整名單', highlight: false, icon: Users },
       { label: '品牌曝光', value: '暖場影片', highlight: false, icon: Target },
    ],
    bg: 'bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-transparent',
    border: 'border-yellow-500/30',
    shadow: 'shadow-[0_0_40px_rgba(234,179,8,0.1)]',
    accent: 'text-yellow-400',
    btnColor: 'bg-white/10 hover:bg-white/20 text-white'
  }
];

export const PartnerSection: React.FC = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [inputCode, setInputCode] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<'value' | 'plans'>('value');
  const [activePlanIndex, setActivePlanIndex] = useState(1); // Default to Platinum (Index 1)

  const handleUnlock = () => {
    const normalizedInput = inputCode.trim().toUpperCase();
    if (ALLOWED_PARTNERS.includes(normalizedInput)) {
      setCurrentUser(normalizedInput);
      setIsLocked(false);
    } else {
      setError(`未找到 "${inputCode}"`);
    }
  };

  const nextPlan = () => {
    setActivePlanIndex((prev) => (prev + 1) % PLANS.length);
  };

  const prevPlan = () => {
    setActivePlanIndex((prev) => (prev - 1 + PLANS.length) % PLANS.length);
  };

  // Filter out the current user from the list of displayed past partners
  const filteredPartners = ALLOWED_PARTNERS.filter(p => p !== currentUser);

  const strategicPoints = [
    {
      icon: Target,
      title: "【精準受眾】提供精準創意受眾",
      desc: "鎖定 25-50 歲主力消費群，現場高比例為手握預算的 企業採購者 與 多媒體專家。",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: TrendingUp,
      title: "【變現機會】把握潛在變現機會",
      desc: "將現場人流轉化為 「高意向採購清單」。我們協助您在採購當下攔截需求，直接挹注下一季的 B2B 業績增長。",
      color: "text-green-400",
      bg: "bg-green-400/10"
    },
    {
      icon: Globe,
      title: "【效益曝光】更多潛在效益曝光",
      desc: "打破單日活動限制。結合 「季度線上研討會」 與 「LINE 社群再行銷」，持續在 11 萬名用戶中深化影響力。",
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    },
    {
      icon: BarChart3,
      title: "【結案資訊】交付完整結案資訊",
      desc: "我們重視您的 ROI。活動後將交付 完整的結案數據報告，包含精確的受眾分析與成效回饋。",
      color: "text-orange-400",
      bg: "bg-orange-400/10"
    }
  ];

  return (
    <section className={`relative overflow-hidden flex flex-col justify-start md:justify-center bg-[#0a0a0a] min-h-screen py-6 md:py-10 px-6 md:px-20 pt-24 md:pt-10`}>
      {isLocked ? (
        <div className="flex flex-col items-center justify-center h-full min-h-[60vh]">
          <div className="max-w-xs w-full text-center">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
              <Building2 className="text-gray-400" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Partner Exclusive</h3>
            <input 
              type="text" 
              value={inputCode}
              onChange={(e) => { setInputCode(e.target.value); setError(""); }}
              onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
              placeholder="ENTER BRAND ID" 
              className="w-full bg-black border border-gray-700 rounded-lg py-3 px-4 text-center text-white font-bold uppercase tracking-widest focus:border-blue-500 mb-4"
            />
            <button onClick={handleUnlock} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-500 transition-colors">Verify</button>
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>
        </div>
      ) : (
        <div className={`w-full max-w-7xl mx-auto flex flex-col h-full relative z-10 justify-start md:justify-center`}>
          
          {/* Header & Nav Area - Modified spacing to push down from top and pull closer to content */}
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-6 shrink-0 gap-4 w-full">
            
            {/* Title Group */}
            <div className={`transition-opacity duration-300 ${activeTab === 'plans' ? 'opacity-20 hover:opacity-100' : 'opacity-100'}`}>
              <div className="w-12 h-1 bg-blue-600 mb-2 rounded-full" />
              <p className="text-gray-400 font-bold tracking-widest uppercase text-[10px] mb-1">
                 Partner Program for {currentUser}
              </p>
              <h2 className="text-xl md:text-4xl font-black tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                為何選擇與我們合作？
              </h2>
            </div>
            
            {/* Tab Controls - Fixed */}
            <div className="flex items-center gap-3">
               <div className="flex p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                  <button 
                    onClick={() => setActiveTab('value')}
                    className={`
                      flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all
                      ${activeTab === 'value' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}
                    `}
                  >
                    <LayoutGrid size={12} /> 合作優勢
                  </button>
                  <button 
                    onClick={() => setActiveTab('plans')}
                    className={`
                      flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all
                      ${activeTab === 'plans' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}
                    `}
                  >
                    <CreditCard size={12} /> 方案列表
                  </button>
               </div>

               <button onClick={() => setIsLocked(true)} className="text-xs text-gray-500 hover:text-white border border-white/10 px-3 py-1.5 rounded-full transition-all bg-black/50 backdrop-blur-md">
                  <Lock size={12} />
               </button>
            </div>
          </div>

          {/* Tab Content Area - Fills remaining space, Center Vertically */}
          <div className="relative flex-1 min-h-0 flex flex-col justify-start md:justify-center">
            
            {/* --- TAB 1: VALUE (為何合作) --- */}
            {activeTab === 'value' && (
              <div className="flex flex-col gap-3 justify-center animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8 md:pb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {strategicPoints.map((point, idx) => (
                    <div key={idx} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-center min-h-[140px] group">
                      <div className="flex justify-between items-start mb-2">
                        <div className={`w-10 h-10 ${point.bg} ${point.color} rounded-xl flex items-center justify-center`}>
                          <point.icon size={20} />
                        </div>
                        <span className="text-gray-600 font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">0{idx+1}</span>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-1 leading-snug">{point.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{point.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Footer Partners */}
                <div className="border-t border-white/10 pt-4 text-center shrink-0">
                  <p className="text-amber-400 font-bold mb-3 uppercase tracking-[0.3em] text-[10px] drop-shadow-[0_0_10px_rgba(251,191,36,0.6)] animate-pulse flex items-center justify-center gap-2">
                     <Star size={12} className="text-yellow-300" fill="currentColor" />
                     過往參與 Weblink 生態系之合作品牌
                     <Star size={12} className="text-yellow-300" fill="currentColor" />
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                    {filteredPartners.map((p, i) => {
                      const isConfirmed = CONFIRMED_PARTNERS.includes(p);
                      return (
                        <span 
                          key={i} 
                          className={`
                            text-[10px] font-black px-3 py-1.5 rounded-full transition-all duration-300 cursor-default tracking-wider
                            ${isConfirmed 
                              ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.6)] border border-yellow-400 scale-105' 
                              : 'text-yellow-100 border border-yellow-500/40 bg-yellow-600/10 shadow-[0_0_15px_rgba(234,179,8,0.15)] hover:bg-yellow-500 hover:text-black hover:shadow-[0_0_20px_rgba(234,179,8,0.6)]'
                            }
                          `}
                        >
                            {p}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* --- TAB 2: PLANS (Metallic Glass Carousel) --- */}
            {activeTab === 'plans' && (
              <div className="flex flex-col items-center justify-center w-full animate-in fade-in zoom-in-95 duration-500 py-4">
                
                {/* Centered Title for Plans */}
                <div className="text-center mb-6 relative z-20">
                   <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-2 drop-shadow-2xl">
                     年度合作方案
                   </h2>
                   <p className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-2">
                      <Zap size={14} className="text-yellow-500" fill="currentColor" />
                      Exclusive for {currentUser}
                   </p>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full max-w-[1200px] mx-auto flex items-center justify-center pb-8 min-h-[420px]">
                  
                  <button 
                    onClick={prevPlan} 
                    className="
                      absolute z-50 p-3 rounded-full bg-white/5 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white transition-all hover:scale-110 active:scale-95 shadow-lg
                      left-0 top-1/2 -translate-y-1/2 md:left-4 md:translate-x-0
                    "
                    aria-label="Previous Plan"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextPlan} 
                    className="
                      absolute z-50 p-3 rounded-full bg-white/5 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white transition-all hover:scale-110 active:scale-95 shadow-lg
                      right-0 top-1/2 -translate-y-1/2 md:right-4 md:translate-x-0
                    "
                    aria-label="Next Plan"
                  >
                    <ChevronRight size={20} />
                  </button>

                  <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
                    {PLANS.map((plan, index) => {
                      const total = PLANS.length;
                      let position = (index - activePlanIndex + total) % total; 
                      // 0 = Center, 1 = Right, 2 = Left (circular)

                      let containerStyle = "";
                      
                      if (position === 0) {
                        // Center
                        containerStyle = "left-1/2 -translate-x-1/2 z-30 scale-100 opacity-100";
                      } else if (position === 1) {
                        // Right
                        containerStyle = "left-[100%] md:left-[82%] -translate-x-1/2 z-10 scale-[0.85] opacity-50 cursor-pointer hover:opacity-100 hover:scale-[0.87]";
                      } else {
                        // Left (position 2 or -1)
                        containerStyle = "left-[0%] md:left-[18%] -translate-x-1/2 z-10 scale-[0.85] opacity-50 cursor-pointer hover:opacity-100 hover:scale-[0.87]";
                      }

                      return (
                        <div 
                          key={plan.id}
                          className={`absolute w-[280px] md:w-[340px] transition-all duration-700 cubic-bezier(0.25, 0.8, 0.25, 1) ${containerStyle} origin-center`}
                          onClick={() => { if (position !== 0) setActivePlanIndex(index); }}
                        >
                           <div className={`
                             w-full h-auto min-h-[400px] p-6 rounded-[2rem] border backdrop-blur-3xl flex flex-col relative overflow-hidden group
                             ${plan.bg} ${plan.border} ${plan.shadow}
                           `}>
                              {/* Glass/Metallic Gloss Effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 opacity-50 pointer-events-none"></div>
                              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30"></div>
                              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-b from-white/5 to-transparent blur-sm pointer-events-none"></div>

                              {/* Content */}
                              <div className="relative z-10 flex flex-col h-full">
                                
                                <div className="flex justify-between items-start mb-4">
                                  <div className="flex flex-col">
                                    <div className={`text-[10px] font-black tracking-[0.2em] uppercase ${plan.accent} drop-shadow-md`}>{plan.name}</div>
                                    <div className="text-white font-bold text-base mt-0.5">{plan.nameCn}</div>
                                  </div>
                                  {plan.reco && <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[9px] px-2 py-0.5 rounded font-bold shadow-lg tracking-wide">RECOMMENDED</div>}
                                </div>

                                <div className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl flex items-baseline gap-2">
                                  {plan.price}
                                </div>

                                {/* Features List */}
                                <ul className="space-y-0 mb-6 flex-1">
                                  {plan.features.map((feat, i) => (
                                    <li key={i} className="h-10 flex items-center justify-between border-b border-white/5 last:border-0 group/item hover:bg-white/5 transition-colors -mx-2 px-2">
                                      <div className="flex items-center gap-2">
                                        <div className={`p-1 rounded-lg bg-black/20 ${feat.inactive ? 'opacity-30' : ''}`}>
                                          <feat.icon size={12} className={feat.inactive ? 'text-gray-500' : plan.accent} />
                                        </div>
                                        <span className={`text-xs font-bold ${feat.inactive ? 'text-gray-600 line-through' : 'text-gray-200'}`}>{feat.label}</span>
                                      </div>
                                      <span className={`text-xs font-medium ${feat.highlight ? 'text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'text-gray-500'}`}>
                                        {feat.value}
                                      </span>
                                    </li>
                                  ))}
                                </ul>

                                <button className={`w-full py-3 rounded-xl font-bold text-xs transition-all duration-300 transform hover:-translate-y-1 active:scale-95 border border-white/10 ${plan.btnColor}`}>
                                  {position === 0 ? '立即預約席次' : '切換查看方案'}
                                </button>
                              </div>
                           </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2 pb-2 shrink-0">
                  {PLANS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePlanIndex(idx)}
                      className={`
                        h-1 rounded-full transition-all duration-300 
                        ${idx === activePlanIndex ? 'w-6 bg-white shadow-[0_0_10px_white]' : 'w-1.5 bg-gray-700 hover:bg-gray-500'}
                      `}
                    />
                  ))}
                </div>

              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
