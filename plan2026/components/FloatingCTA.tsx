
import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Zap } from 'lucide-react';
import { Magnetic } from './ui/Motion';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 print:hidden">
      
      <div 
        className={`
          flex flex-col gap-3 transition-all duration-300 origin-bottom-right
          ${isExpanded ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10 pointer-events-none'}
        `}
      >
        <Magnetic strength={0.1}>
          <a 
            href="mailto:Mark.tsao@weblink.com.tw"
            className="flex items-center gap-3 bg-[#FA0F00] text-white px-5 py-3 rounded-full shadow-xl hover:bg-red-700 transition font-bold"
          >
            <span className="text-sm text-white">聯繫業務</span>
            <div className="bg-black/10 p-1 rounded-full"><MessageCircle size={16} className="text-white" /></div>
          </a>
        </Magnetic>
      </div>

      <Magnetic strength={0.3}>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`
            w-14 h-14 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-300
            ${isExpanded ? 'bg-gray-800 text-white rotate-90' : 'bg-blue-600 text-white hover:scale-110 hover:bg-blue-500'}
          `}
        >
          {isExpanded ? <X size={24} className="text-white" /> : <Zap size={24} fill="white" className="text-white" />}
        </button>
      </Magnetic>
    </div>
  );
};
