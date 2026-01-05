
import React, { useState } from 'react';
import { 
  Lock, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  ArrowRight, 
  Building2, 
  Star, 
  Target, 
  Globe, 
  BarChart3,
  Users
} from 'lucide-react';
import { Card } from './ui/Shared';
import { DecryptionText } from './ui/Motion';

const ALLOWED_PARTNERS = [
  "NVIDIA", "ARPHIC", "WD", "SEAGATE", "QNAP", "ADOBE", "AMD", 
  "BENQ", "LOGITECH", "MONOTYPE", "PANTONE", "SANDISK", "WACOM", 
  "MSI", "GIGABYTE", "ACER", "MOTIONER", "LENOVO", "SONY", 
  "DYNAFONT", "APPLE", "REALLUSION"
];

export const PartnerSection: React.FC = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [inputCode, setInputCode] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState("");

  const handleUnlock = () => {
    const normalizedInput = inputCode.trim().toUpperCase();
    if (ALLOWED_PARTNERS.includes(normalizedInput)) {
      setCurrentUser(normalizedInput);
      setIsLocked(false);
    } else {
      setError(`未找到 "${inputCode}"`);
    }
  };

  const strategicPoints = [
    {
      icon: Target,
      title: "【精準受眾】提供精準創意受眾",
      desc: "鎖定 25-50 歲主力消費群，現場高比例為手握預算的 企業採購者 與 多媒體專家。我們確保站在您攤位前的，絕對是值得投資的高價值潛客。",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: TrendingUp,
      title: "【變現機會】把握潛在變現機會",
      desc: "將現場人流轉化為 「高意向採購清單」。透過推廣貴司的企業專案，我們協助您在採購當下攔截需求，直接挹注下一季的 B2B 業績增長。",
      color: "text-green-400",
      bg: "bg-green-400/10"
    },
    {
      icon: Globe,
      title: "【效益曝光】更多潛在效益曝光",
      desc: "打破單日活動限制。結合 「季度線上研討會」 與 「LINE 社群再行銷」，將您的技術優勢轉化為長尾內容，持續在 11 萬名用戶中深化影響力。",
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    },
    {
      icon: BarChart3,
      title: "【結案資訊】交付完整結案資訊",
      desc: "我們重視您的 ROI。活動後將交付 完整的結案數據報告，包含精確的受眾分析與成效回饋，助您完美達成總部的 年度績效標的。",
      color: "text-orange-400",
      bg: "bg-orange-400/10"
    }
  ];

  return (
    <section className={`relative overflow-hidden flex flex-col justify-center bg-[#0a0a0a] min-h-screen py-20 px-6 md:px-20`}>
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
        <div className="w-full max-w-7xl mx-auto overflow-hidden flex flex-col">
          <div className="flex justify-between items-end mb-12 shrink-0">
            <div>
              <div className="w-12 h-1 bg-blue-600 mb-4 rounded-full" />
              <p className="text-gray-400 font-medium tracking-widest uppercase text-xs mb-2">
                <DecryptionText text={`Partner Program for ${currentUser}`} />
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">為何選擇與我們合作？</h2>
            </div>
            <button onClick={() => setIsLocked(true)} className="text-xs text-gray-500 hover:text-white border border-white/10 px-4 py-2 rounded-full transition-all">切換品牌標示</button>
          </div>

          {/* 4 Pillars Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {strategicPoints.map((point, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.05] transition-all duration-300">
                <div className={`w-10 h-10 ${point.bg} ${point.color} rounded-xl flex items-center justify-center mb-4`}>
                  <point.icon size={20} />
                </div>
                <h4 className="text-white font-bold text-base mb-3 leading-snug">{point.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center mb-16">
             <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-white/10" />
                <span className="text-gray-400 text-sm font-bold">感謝多年信任的廠商，已有多年執行成果</span>
                <div className="h-px w-12 bg-white/10" />
             </div>
             <h3 className="text-xl font-bold text-white uppercase tracking-[0.2em] opacity-80 flex items-center gap-2">
               <Zap size={18} className="text-yellow-500" fill="currentColor" />
               單一實體場次方案
             </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
            <div className="md:col-span-1">
              <Card className="p-6 h-full border-gray-800 bg-gray-900/40">
                <div className="text-gray-500 font-black text-xs mb-1">SILVER SPONSOR</div>
                <div className="text-4xl font-black text-white mb-6">$3,000</div>
                <ul className="space-y-4 text-xs text-gray-400">
                  <li className="flex gap-3 items-center"> <CheckCircle2 size={16} className="text-gray-600"/> 1 張 實體展示攤位 </li>
                  <li className="flex gap-3 items-center"> <CheckCircle2 size={16} className="text-gray-600"/> 活動問卷潛客名單 </li>
                  <li className="flex gap-3 items-center"> <CheckCircle2 size={16} className="text-gray-600"/> 現場主題背板 LOGO </li>
                </ul>
              </Card>
            </div>

            <div className="md:col-span-1 transform lg:scale-110 z-10">
              <div className="bg-gradient-to-b from-blue-900/40 via-black to-black p-8 rounded-[2rem] border-2 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.2)] h-full flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-blue-300 font-black text-xs">PLATINUM SPONSOR</div>
                  <div className="bg-blue-600 text-[10px] text-white font-black px-2 py-0.5 rounded">RECOMMENDED</div>
                </div>
                <div className="text-5xl font-black text-white mb-8">$6,000</div>
                <ul className="space-y-4 text-xs text-gray-200 flex-1">
                  <li className="flex gap-3 items-center font-bold text-blue-300"> <Star size={16} fill="currentColor"/> 20 mins 專題演講議程 </li>
                  <li className="flex gap-3 items-center"> <CheckCircle2 size={16} className="text-blue-500"/> 2 張 實體展示攤位 </li>
                  <li className="flex gap-3 items-center"> <CheckCircle2 size={16} className="text-blue-500"/> 完整 MQL 高價值名單 </li>
                  <li className="flex gap-3 items-center"> <CheckCircle2 size={16} className="text-blue-500"/> 活動暖場影片 & 數位問卷 </li>
                </ul>
                <button className="w-full bg-white text-black font-black py-3 rounded-xl mt-8 text-sm hover:bg-blue-50 transition-colors">立即搶佔席次</button>
              </div>
            </div>

            <div className="md:col-span-1">
              <Card className="p-6 h-full border-yellow-900/50 bg-gray-900/40">
                <div className="text-yellow-500 font-black text-xs mb-1">GOLD SPONSOR</div>
                <div className="text-4xl font-black text-white mb-6">$4,000</div>
                <ul className="space-y-4 text-xs text-gray-400">
                  <li className="flex gap-3 items-center"> <CheckCircle2 size={16} className="text-yellow-600"/> 2 張 實體展示攤位 </li>
                  <li className="flex gap-3 items-center"> <CheckCircle2 size={16} className="text-yellow-600"/> 活動問卷完整名單 </li>
                  <li className="flex gap-3 items-center"> <CheckCircle2 size={16} className="text-yellow-600"/> 現場廣告暖場影片 </li>
                </ul>
              </Card>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <p className="text-gray-500 text-[10px] font-bold mb-4 uppercase tracking-[0.3em]">曾參與 Weblink 生態系之合作品牌</p>
            <div className="flex flex-wrap justify-center gap-3">
              {ALLOWED_PARTNERS.filter(p => p !== currentUser).slice(0, 16).map((p, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 font-bold hover:text-white transition-colors">{p}</span>
              ))}
              <span className="text-[10px] text-gray-600 self-center font-bold">...AND MORE</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
