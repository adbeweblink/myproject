
import React, { useRef, useEffect, useState } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from './ui/Shared';

const MARKETING_IMAGES = [
  "https://adbeweblink.github.io/myproject/images/adobeday/marketing/01.jpg",
  "https://adbeweblink.github.io/myproject/images/adobeday/marketing/02.jpg",
  "https://adbeweblink.github.io/myproject/images/adobeday/marketing/03.jpg",
  "https://adbeweblink.github.io/myproject/images/adobeday/marketing/05.jpg",
  "https://adbeweblink.github.io/myproject/images/adobeday/marketing/06.jpg",
  "https://adbeweblink.github.io/myproject/images/adobeday/marketing/07.jpg",
  "https://adbeweblink.github.io/myproject/images/adobeday/marketing/08.jpg",
  "https://adbeweblink.github.io/myproject/images/adobeday/marketing/09.jpg",
  "https://adbeweblink.github.io/myproject/images/adobeday/marketing/10.jpg",
  "https://adbeweblink.github.io/myproject/images/adobeday/marketing/11.jpg",
  "https://adbeweblink.github.io/myproject/images/adobeday/marketing/12.jpg",
  "https://adbeweblink.github.io/myproject/images/adobeday/marketing/13.jpg",
  "https://adbeweblink.github.io/myproject/images/adobeday/marketing/14.jpg"
];

export const MarketingShowcase: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by roughly one card width
      const scrollAmount = window.innerWidth < 768 ? 320 : 640;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const section = document.getElementById('marketing');
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

  // Intersection Observer to detect the center/active card
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.6, // Trigger when 60% of the item is visible
        rootMargin: "0px -20% 0px -20%" // Shrink the detection area to the center
      }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [MARKETING_IMAGES.length]);

  return (
    <section className="min-h-screen py-10 pt-24 md:pt-10 px-0 md:px-0 border-b border-white/5 bg-[#0a0a0a] flex flex-col justify-center overflow-hidden relative" id="marketing">
      {/* Visuals */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none"></div>

      <div className="w-full flex flex-col justify-center h-full">
        <div className="shrink-0 mb-6 flex flex-col justify-end px-6 md:px-20 max-w-[90rem] mx-auto w-full">
          <SectionHeading 
            title="社群行銷活動實錄" 
            subtitle="Marketing & PR Exposure" 
            color="bg-pink-500" 
          />
          <div className="-mt-4 mb-4 md:-mt-6 md:mb-6 pl-1">
             <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase opacity-70">Design by Kelly</span>
          </div>

          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
             從線上擴散到線下策展，Weblink 持續為 Adobe 創造高強度的品牌曝光與社群聲量。
          </p>
        </div>

        <div className="relative w-full group/scroll">
            <button 
              onClick={() => scroll('left')}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 border border-white/10 text-white opacity-0 group-hover/scroll:opacity-100 hover:bg-white/20 transition-all backdrop-blur-md hidden md:flex"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 border border-white/10 text-white opacity-0 group-hover/scroll:opacity-100 hover:bg-white/20 transition-all backdrop-blur-md hidden md:flex"
            >
              <ChevronRight size={24} />
            </button>

            <div 
              ref={scrollRef}
              className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 pt-10 items-center px-[10vw] md:px-[30vw]" // Added padding-x to allow first/last items to center
            >
              {MARKETING_IMAGES.map((src, index) => {
                const isActive = index === activeIndex;
                return (
                  <div 
                    key={index}
                    ref={(el) => { if (itemsRef.current) itemsRef.current[index] = el; }}
                    data-index={index}
                    className={`
                      snap-center shrink-0 relative rounded-2xl overflow-hidden group 
                      transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                      ${isActive 
                        ? 'w-[90vw] md:w-[680px] scale-100 opacity-100 z-10 border border-pink-500/50 shadow-[0_0_50px_rgba(236,72,153,0.15)]' 
                        : 'w-[80vw] md:w-[600px] scale-90 opacity-30 grayscale brightness-50 border border-white/5'
                      }
                      aspect-video bg-gray-900
                    `}
                  >
                    <img 
                      src={src} 
                      alt={`Marketing Exposure ${index + 1}`} 
                      className={`w-full h-full object-contain bg-black transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-70'}`}
                      loading="lazy"
                    />
                    
                    {/* Overlay - Only show on active card */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                    
                    <div className={`absolute bottom-4 left-6 transition-all duration-500 pointer-events-none ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                       <div className="flex items-center gap-2 text-pink-400 font-bold text-xs uppercase tracking-widest mb-1">
                          <Camera size={14} /> Snapshot 0{index + 1}
                       </div>
                       <div className="text-white font-bold text-base md:text-lg">Campaign Highlight</div>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    </section>
  );
};
