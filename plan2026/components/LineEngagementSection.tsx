
import React from 'react';
import { 
  MessageCircle, 
  Coffee, 
  Bell,
  Battery,
  Wifi,
  Signal,
  Share2,
  Bookmark,
  ChevronDown
} from 'lucide-react';

export const LineEngagementSection: React.FC = () => {
  const newsItems = [
    {
      category: "Adobe Firefly",
      title: "Firefly Video 模型正式商用，開放 PR/AE 下載",
      time: "10 min ago"
    },
    {
      category: "Photoshop 2026",
      title: "Remove Tool 更新：支援一鍵去背與光影重建",
      time: "2 hours ago"
    },
    {
      category: "產業動態",
      title: "OpenAI Sora vs Firefly：企業該如何選擇？",
      time: "08:30 AM"
    },
    {
      category: "Weblink 快訊",
      title: "本週三「快充學堂」開放報名：AI 工作流實戰",
      time: "Yesterday"
    }
  ];

  return (
    <section className="h-screen py-10 px-6 md:px-20 border-b border-white/5 bg-[#161616] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#06C755]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 h-full max-h-[90vh]">
        
        {/* Left Side: Philosophy & Branding (Ordered FIRST on Mobile) */}
        <div className="order-1 lg:order-1 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
             <div className="bg-[#06C755]/20 text-[#06C755] p-2 rounded-lg">
                <MessageCircle size={20} />
             </div>
             <span className="text-[#06C755] font-bold tracking-widest uppercase">Adobe 展碁國際 LINE Official</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-[1.1] mb-6">
            用最少的<span className="text-gray-500">時間</span>，<br />
            看最重要的<span className="text-[#06C755]">資訊</span>
          </h2>

          <p className="text-base md:text-xl text-gray-300 mb-8 leading-relaxed">
            前線業務面對客戶的破冰神器，Weblink 官方帳號每周精選 <strong className="text-white border-b border-[#06C755]">全球 Adobe 產業動態快訊</strong>，
            將繁雜的技術文件轉化為手機易讀的圖文懶人包、用互動小遊戲吸引用戶的青睞。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b04d] text-white px-6 py-3 rounded-full font-bold text-base transition shadow-lg shadow-green-900/50">
              <MessageCircle size={18} />
              <span>免費加入好友</span>
            </button>
            <div className="flex items-center gap-4 px-5 py-3 border border-white/10 rounded-full text-gray-400">
               <span className="text-xs">已有 11.7 萬人訂閱</span>
               <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-5 h-5 rounded-full bg-gray-700 border border-[#161616]"></div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Phone Mockup (Ordered SECOND on Mobile) */}
        <div className="order-2 lg:order-2 flex justify-center lg:justify-end items-center h-full">
          <div className="relative w-[280px] md:w-[320px] aspect-[9/19] bg-black border-[6px] border-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 max-h-[50vh] md:max-h-[70vh] landscape:max-h-[85vh]">
             {/* Phone Status Bar */}
             <div className="bg-white text-black px-5 py-2 flex justify-between items-center text-[10px] font-bold z-20 relative">
                <span>09:41</span>
                <div className="flex items-center gap-1">
                   <Signal size={10} />
                   <Wifi size={10} />
                   <Battery size={10} />
                </div>
             </div>

             {/* Phone App Header */}
             <div className="bg-white text-black px-5 pt-1 pb-4 border-b border-gray-100 z-10 relative">
                <div className="flex justify-between items-center mb-3">
                   <div className="bg-[#FA0F00] text-white p-1 rounded text-[10px] font-black">Adobe</div>
                   <div className="flex gap-2 text-gray-400">
                      <Bell size={16} />
                      <Bookmark size={16} />
                   </div>
                </div>
                <h3 className="text-2xl font-black text-black leading-none mb-1">Tuesday<span className="text-[#FA0F00] text-3xl">.</span></h3>
                <p className="text-gray-500 text-xs font-medium">2026.06.17 • 每週精選快訊</p>
             </div>

             {/* Phone Scroll Content */}
             <div className="bg-gray-50 h-full p-3 space-y-2 overflow-hidden relative">
                <div className="flex items-center gap-2 mb-1">
                   <div className="w-1.5 h-1.5 bg-[#FA0F00] rounded-full animate-pulse"></div>
                   <span className="text-[10px] font-bold text-[#FA0F00] uppercase tracking-wider">Top Stories</span>
                </div>

                {newsItems.map((item, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition">
                     <div className="flex justify-between items-start mb-1">
                        <span className="bg-gray-100 text-gray-600 text-[9px] font-bold px-1.5 py-0.5 rounded">
                          {item.category}
                        </span>
                        <span className="text-[9px] text-gray-400">{item.time}</span>
                     </div>
                     <h4 className="font-bold text-gray-900 text-xs leading-snug mb-1 group-hover:text-[#06C755] transition-colors line-clamp-2">
                       {item.title}
                     </h4>
                     <div className="flex justify-between items-center border-t border-gray-50 pt-1 mt-1">
                        <div className="flex items-center gap-1 text-[9px] text-gray-400">
                           <Coffee size={8} /> 3 min
                        </div>
                        <Share2 size={10} className="text-gray-300" />
                     </div>
                  </div>
                ))}

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
             </div>
             
             {/* Phone Home Indicator */}
             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-black/20 rounded-full z-30"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 animate-bounce">
        <span className="text-[9px] uppercase tracking-widest text-gray-500">View Content Details</span>
        <ChevronDown size={16} className="text-[#06C755]" />
      </div>
    </section>
  );
};
