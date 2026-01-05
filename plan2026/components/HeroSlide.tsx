
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ParallaxBackground } from './ui/Motion';

export const HeroSlide: React.FC = () => (
  <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-20 border-b border-white/5 pt-20 overflow-hidden bg-black">
    <ParallaxBackground />
    
    {/* 🎥 CINEMATIC VIDEO BACKGROUND */}
    <div className="absolute top-0 right-0 w-full lg:w-[75%] h-full z-0 pointer-events-none">
      <div className="relative w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-80"
          style={{ filter: 'contrast(1.2) brightness(0.7) saturate(1.2)' }}
        >
          <source src="https://images-tv.adobe.com/mpcv3/9274/31c83eb0-2b3e-41a1-b192-cd40b2c66576_1743547692.1920x1080at3000_h264.mp4" type="video/mp4" />
        </video>
        
        {/* Horizontal Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        
        {/* Vertical Gradient Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
      </div>
    </div>

    {/* CONTENT LAYER */}
    <div className="w-full z-10 relative">
      <div className="flex items-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
         <div className="w-16 h-1.5 bg-[#FA0F00] rounded-full shadow-[0_0_15px_#FA0F00]" />
         <span className="text-gray-300 font-medium tracking-widest uppercase text-sm bg-white/5 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
           Since 2021 • 5 Years of Partnership
         </span>
      </div>
      
      <p className="text-gray-400 font-medium tracking-widest uppercase mb-4 drop-shadow-md animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 fill-mode-both">FY26 Marketing Strategy Overview</p>
      <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-8 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
        駕馭「多元模型」，<br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FA0F00] to-[#FF4D4D] drop-shadow-[0_0_25px_rgba(250,15,0,0.5)]">
          確立「安全基座」
        </span>
      </h1>
      <p className="text-xl text-gray-200 font-light leading-relaxed w-full mb-12 drop-shadow-lg bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both max-w-3xl">
        <strong className="text-white block mb-2 text-lg">Ecosystem Orchestration (生態系資源協奏)：</strong>
        以 <strong className="text-white border-b-2 border-red-600">Creative Cloud for Enterprise Edition 4 為企業唯一「免責保護傘」</strong>，建構零風險的 AI 內容供應鏈。
        Weblink 的目標是成為 Adobe 與市場之間最高效的「連結器」，專注於解決商業市場碎片化的痛點，整合並調度強大的軟硬體生態系資源，協助原廠與經銷夥伴實現「高價值轉化」的名單成長。
      </p>
      
      <div className="flex gap-8 border-t border-white/10 pt-8 backdrop-blur-sm w-fit pr-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 fill-mode-both">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Our Role</p>
          <p className="font-bold text-white">Ecosystem Architect</p>
        </div>
        <div className="w-px bg-white/10" />
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Marketing Focus</p>
          <p className="font-bold text-white">Enterprise Penetration</p>
        </div>
        <div className="w-px bg-white/10" />
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Target</p>
          <p className="font-bold text-white">High-Value Conversion</p>
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Scroll</span>
      <ChevronDown size={20} className="text-white" />
    </div>
  </section>
);
