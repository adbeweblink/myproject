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
    },
    {
      category: "限時優惠",
      title: "CC for Teams 企業版限時 85 折優惠開跑",
      time: "Yesterday"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6 md:px-20 border-b border-white/5 bg-[#161616] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#06C755]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Philosophy & Branding */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-6">
             <div className="bg-[#06C755]/20 text-[#06C755] p-2 rounded-lg">
                <MessageCircle size={24} />
             </div>
             <span className="text-[#06C755] font-bold tracking-widest uppercase">Weblink LINE Official</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-8">
            用最少的<span className="text-gray-500">時間</span>，<br />
            看最重要的<span className="text-[#06C755]">新聞</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            <span className="flex items-center gap-2 mb-2 font-bold text-white">
              <Coffee size={20} className="text-yellow-500" />
              一杯咖啡的時間，打開你的創意視野。
            </span>
            我們不發送垃圾廣告。Weblink 官方帳號每周精選 <strong className="text-white border-b border-[#06C755]">5 則全球 Adobe 產業動態與教學</strong>，
            將繁雜的技術文件轉化為手機易讀的圖文懶人包，做您口袋裡的創意秘書。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05b04d] text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg shadow-green-900/50">
              <MessageCircle size={20} />
              <span>免費加入好友</span>
            </button>
            <div className="flex items-center gap-4 px-6 py-4 border border-white/10 rounded-full text-gray-400">
               <span className="text-sm">已有 11.7 萬人訂閱</span>
               <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gray-700 border border-[#161616]"></div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Phone Mockup (Visualizing the "App/News" feel) */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-[320px] md:w-[360px] h-[680px] bg-black border-[8px] border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
             {/* Phone Status Bar */}
             <div className="bg-white text-black px-6 py-3 flex justify-between items-center text-xs font-bold z-20 relative">
                <span>09:41</span>
                <div className="flex items-center gap-1.5">
                   <Signal size={12} />
                   <Wifi size={12} />
                   <Battery size={12} />
                </div>
             </div>

             {/* Phone App Header */}
             <div className="bg-white text-black px-6 pt-2 pb-6 border-b border-gray-100 z-10 relative">
                <div className="flex justify-between items-center mb-4">
                   <div className="bg-[#FA0F00] text-white p-1.5 rounded text-xs font-black">Adobe</div>
                   <div className="flex gap-3 text-gray-400">
                      <Bell size={20} />
                      <Bookmark size={20} />
                   </div>
                </div>
                <h3 className="text-3xl font-black text-black leading-none mb-1">Tuesday<span className="text-[#FA0F00] text-4xl">.</span></h3>
                <p className="text-gray-500 text-sm font-medium">2026.06.17 • 每週精選快訊</p>
             </div>

             {/* Phone Scroll Content */}
             <div className="bg-gray-50 h-full p-4 space-y-3 overflow-hidden relative">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-1.5 h-1.5 bg-[#FA0F00] rounded-full animate-pulse"></div>
                   <span className="text-xs font-bold text-[#FA0F00] uppercase tracking-wider">Top Stories</span>
                </div>

                {newsItems.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition">
                     <div className="flex justify-between items-start mb-2">
                        <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                        <span className="text-[10px] text-gray-400">{item.time}</span>
                     </div>
                     <h4 className="font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#06C755] transition-colors">
                       {item.title}
                     </h4>
                     <div className="flex justify-between items-center border-t border-gray-50 pt-2 mt-1">
                        <div className="flex items-center gap-1 text-[10px] text-gray-400">
                           <Coffee size={10} /> 3 min read
                        </div>
                        <Share2 size={12} className="text-gray-300" />
                     </div>
                  </div>
                ))}

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
             </div>
             
             {/* Phone Home Indicator */}
             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full z-30"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-gray-500">View Content Details</span>
        <ChevronDown size={20} className="text-[#06C755]" />
      </div>
    </section>
  );
};