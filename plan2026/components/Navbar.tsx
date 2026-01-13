
import React, { useState, useEffect, useRef } from 'react';
import { Download, Menu, X, ChevronRight, Maximize, Minimize } from 'lucide-react';
import { Magnetic } from './ui/Motion';
import { TutorialOverlay } from './TutorialOverlay';

// Updated Order based on new Narrative Flow
const NAV_ITEMS = [
  { label: '首頁', id: 'home' },
  { label: '護城河', id: 'moat' }, // The Why
  { label: '剛需', id: 'three-moats' }, // Changed from 痛點 to 剛需
  { label: '策略', id: 'insight' }, // The Strategy
  { label: '社群', id: 'community' }, // Daily Engagement
  { label: '快訊', id: 'community-details' }, // Content
  { label: '行銷', id: 'marketing' }, // NEW: Marketing Showcase
  { label: '賦能', id: 'lab' }, // Ice Breaking & Tools
  { label: '訴求', id: 'philosophy' }, // Sales Enablement (Renamed from Philosophy to Appeal)
  { label: '時程', id: 'timeline' }, // Market Impact
  { label: '回顧', id: 'videos' }, // Vendor only
  { label: '模型', id: 'firefly' }, // NEW Firefly Models
  { label: '生態', id: 'ecosystem' }, // Now Public
  { label: '學堂', id: 'academy' }, // Education - Moved
  { label: '聯盟', id: 'alliance' },
  { label: '盛會', id: 'flagship' }, // Market Impact (Event) - Moved
  { label: '戰略', id: 'strategy' }, // Now Public
  { label: '效益', id: 'kpi' }, // Proof
  { label: '總結', id: 'summary' }, // NEW Summary
  { label: '方案', id: 'partner' }, // Vendor only
  { label: '聯繫', id: 'contact' }, // Vendor only
];

interface NavbarProps {
  isVendorMode: boolean;
  onLogoSecretTrigger: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isVendorMode, onLogoSecretTrigger }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  // Secret Click Logic
  const clickCountRef = useRef(0);
  const lastClickTimeRef = useRef(0);

  const handleLogoClick = () => {
    const now = Date.now();
    if (now - lastClickTimeRef.current > 1000) {
      clickCountRef.current = 1;
    } else {
      clickCountRef.current += 1;
    }
    lastClickTimeRef.current = now;

    if (clickCountRef.current >= 7) {
      onLogoSecretTrigger();
      clickCountRef.current = 0;
    }
  };

  // 根據模式過濾導覽項目
  const HIDDEN_FOR_FACTORY = ['videos', 'partner', 'contact'];
  const filteredNavItems = isVendorMode 
    ? NAV_ITEMS 
    : NAV_ITEMS.filter(item => !HIDDEN_FOR_FACTORY.includes(item.id));

  useEffect(() => {
    const container = document.getElementById('main-scroll-container');
    const handleScroll = () => {
      if (container) {
        setScrolled(container.scrollTop > 50);
        const { scrollTop, scrollHeight, clientHeight } = container;
        if (scrollHeight > clientHeight) {
          setScrollProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
        }
      }
    };
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: document.getElementById('main-scroll-container'),
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeBtn = document.getElementById(`nav-btn-${activeSection}`);
    const navContainer = navContainerRef.current;
    
    if (activeBtn && navContainer) {
      const containerRect = navContainer.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      
      setIndicatorStyle({
        left: btnRect.left - containerRect.left + navContainer.scrollLeft,
        width: btnRect.width,
        opacity: 1
      });

      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeSection, isVendorMode]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const container = document.getElementById('main-scroll-container');
    const element = document.getElementById(id);
    
    if (container && element) {
      container.style.scrollSnapType = 'none';
      container.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      setTimeout(() => {
        if (container) container.style.scrollSnapType = 'y mandatory';
      }, 800);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((e) => {
            console.error(`Error attempting to enable fullscreen mode: ${e.message} (${e.name})`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
          scrolled || isMenuOpen 
            ? 'bg-black/90 backdrop-blur-xl border-white/10 py-2' 
            : 'bg-transparent border-transparent py-4'
        } px-4 md:px-8 flex flex-col justify-center print:hidden`}
      >
        <div className="flex justify-between items-center w-full gap-6">
          <div 
            className="shrink-0 cursor-pointer flex flex-col items-start leading-tight group select-none" 
            onClick={handleLogoClick}
          >
            <div className="flex items-center gap-1.5">
              <span className="text-white font-black text-xs md:text-sm tracking-tight uppercase">
                Adobe Authorized Distributor
              </span>
              <span className="text-white/20 font-thin">|</span>
            </div>
            <span className="text-white/80 font-medium text-[9px] md:text-[10px] tracking-[0.15em] uppercase group-hover:text-white transition-colors">
              WEBLINK INTERNATIONAL INC.
            </span>
          </div>

          <div className="hidden lg:flex flex-1 justify-center overflow-hidden">
            <div 
              ref={navContainerRef}
              className="relative flex items-center bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md overflow-x-auto no-scrollbar max-w-full"
            >
              <div 
                className="absolute h-[calc(100%-8px)] bg-white rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0"
                style={{ 
                  left: `${indicatorStyle.left}px`, 
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.opacity 
                }}
              />

              {filteredNavItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-btn-${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      relative z-10 px-3 xl:px-4 py-1.5 rounded-full text-[11px] xl:text-xs font-semibold transition-colors duration-500 whitespace-nowrap
                      ${isActive ? 'text-black' : 'text-gray-400 hover:text-white'}
                    `}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3 items-center shrink-0 relative">
            <Magnetic strength={0.2}>
              <button 
                onClick={toggleFullscreen}
                className="hidden sm:flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 hover:bg-white/20 text-white transition-all backdrop-blur-md border border-white/10 active:scale-95 shadow-lg relative z-20"
                title={isFullscreen ? "退出全螢幕" : "全螢幕瀏覽"}
              >
                {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
              </button>
            </Magnetic>
            
            {/* Tutorial Tooltip: Attached here to move with the button */}
            <div className="hidden sm:block">
              <TutorialOverlay />
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div 
           className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-red-600 via-orange-500 to-red-600 transition-all duration-300 ease-out"
           style={{ width: `${scrollProgress}%`, opacity: scrolled ? 1 : 0 }}
        />
      </nav>

      <div className={`fixed inset-0 z-[90] bg-black/98 backdrop-blur-3xl transition-all duration-700 flex flex-col pt-20 px-8 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
        <div className="flex flex-col gap-6 max-w-sm mx-auto w-full h-full overflow-y-auto pb-20 no-scrollbar">
          {filteredNavItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-2xl font-black text-left flex items-center justify-between group transition-all duration-500 shrink-0 ${
                  isActive ? 'text-red-500 translate-x-2' : 'text-white'
                }`}
                style={{ transitionDelay: `${idx * 30}ms` }}
              >
                <span>{item.label}</span>
                <ChevronRight size={20} className={`transition-all ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
