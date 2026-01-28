
import React, { useState, useEffect } from 'react';
import { Maximize, X } from 'lucide-react';

export const TutorialOverlay: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen tutorial before
    const hasSeen = localStorage.getItem('weblink-tutorial-seen');
    // Only show on desktop/tablet where fullscreen button is visible (matches Navbar logic)
    const isDesktop = window.matchMedia('(min-width: 640px)').matches;

    if (!hasSeen && isDesktop) {
      // Delay slightly to ensure UI is ready and attract attention
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('weblink-tutorial-seen', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="absolute top-full right-0 mt-6 w-56 z-50 animate-bounce origin-top-right">
       <div className="relative bg-[#FA0F00] text-white p-4 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/20 backdrop-blur-md">
          {/* Triangle Pointer */}
          <div className="absolute -top-2 right-4 w-4 h-4 bg-[#FA0F00] transform rotate-45 border-l border-t border-white/20"></div>
          
          <button 
            onClick={(e) => { e.stopPropagation(); handleDismiss(); }}
            className="absolute -top-2 -left-2 bg-white text-black rounded-full p-1 shadow-md hover:scale-110 transition-transform"
          >
             <X size={12} strokeWidth={3} />
          </button>

          <div className="flex flex-col items-start gap-2">
             <div className="flex items-center gap-2 font-black text-sm uppercase tracking-wider text-white border-b border-white/20 pb-1 w-full mb-1">
                <Maximize size={16} />
                <span>Immersive View</span>
             </div>
             <p className="text-xs font-bold leading-relaxed text-white/90">
                強烈建議點擊上方按鈕<br/>
                開啟 <span className="text-yellow-300">全螢幕模式</span> 獲得最佳體驗
             </p>
          </div>
       </div>
    </div>
  );
};
