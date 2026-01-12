
import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlide } from './components/HeroSlide';
import { InsightSlide } from './components/InsightSlide';
import { TheMoatSection } from './components/TheMoatSection'; 
import { ThreeMoatsSection } from './components/ThreeMoatsSection'; 
import { TimelineSlide } from './components/TimelineSlide';
import { VideoGallery } from './components/VideoGallery';
import { AcademySection } from './components/AcademySection';
import { FlagshipEventSection } from './components/FlagshipEventSection';
import { LineEngagementSection } from './components/LineEngagementSection';
import { LineContentShowcase } from './components/LineContentShowcase';
import { BusinessAccelerationLab } from './components/BusinessAccelerationLab';
import { MultiModelPhilosophySection } from './components/MultiModelPhilosophySection';
import { ModelEcosystemSection } from './components/ModelEcosystemSection';
import { StrategicAllianceSection } from './components/StrategicAllianceSection';
import { ConcentricStrategySection } from './components/ConcentricStrategySection';
import { KPIDashboard } from './components/KPIDashboard';
import { SummarySection } from './components/SummarySection';
import { PartnerSection } from './components/PartnerSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { BackToTop } from './components/BackToTop';
import { FadeIn, FireflyBackground } from './components/ui/Motion';
import { FireflyModelsSection } from './components/FireflyModelsSection';
import { Lock, Unlock } from 'lucide-react';

const SectionWrapper: React.FC<{ children: React.ReactNode; id: string; bgColor?: string }> = ({ children, id, bgColor = "bg-black" }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = document.getElementById('main-scroll-container');
    const handleScroll = () => {
      if (!sectionRef.current || !container) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const offsetTop = rect.top;
      const height = rect.height;

      if (offsetTop < 0) {
        const progress = Math.abs(offsetTop) / height;
        const opacity = Math.max(0.4, 1 - progress);
        const scale = Math.max(0.95, 1 - progress * 0.05);
        const translateY = offsetTop * 0.2;

        sectionRef.current.style.opacity = opacity.toString();
        sectionRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        sectionRef.current.style.filter = `brightness(${Math.max(0.5, 1 - progress)})`;
      } else {
        sectionRef.current.style.opacity = "1";
        sectionRef.current.style.transform = "scale(1) translateY(0px)";
        sectionRef.current.style.filter = "brightness(1)";
      }
    };

    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      id={id} 
      ref={sectionRef}
      className={`w-full min-h-screen snap-start flex flex-col justify-start md:justify-center transition-all duration-300 ease-out will-change-transform ${bgColor} pt-0`}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [isVendorMode, setIsVendorMode] = useState(() => {
    return localStorage.getItem('weblink-vendor-mode') === 'true';
  });
  const [showToast, setShowToast] = useState(false);

  const toggleMode = () => {
    const newMode = !isVendorMode;
    setIsVendorMode(newMode);
    localStorage.setItem('weblink-vendor-mode', newMode.toString());
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // Keyboard Navigation Logic
  useEffect(() => {
    const container = document.getElementById('main-scroll-container');
    if (!container) return;

    // Define the order of sections based on render logic
    const sections = [
      'home',
      'moat',        // 1. The Why & Strategy (Part 2)
      'three-moats', // NEW: The Three Pillars
      'insight',     // 1. The Why & Strategy (Part 3)
      'community',   // 2. Daily Engagement
      'community-details', // 2. Daily Engagement (Content)
      'lab',         // 3. Sales Enablement (Tools/Ice Breaking)
      'philosophy',  // 3. Sales Enablement (Philosophy)
      'timeline',    // 4. Market Impact (Timeline)
      ...(isVendorMode ? ['videos'] : []),
      'firefly',     // NEW: Firefly Models Section
      'ecosystem',   // Now Public
      'academy',     // 5. Education (Moved after Ecosystem)
      'alliance',    // Public
      'flagship',    // 5. Market Impact (Event) (Moved after Alliance)
      'strategy',    // Now Public
      'kpi',         // 6. Proof
      'summary',     // 7. Summary (New)
      ...(isVendorMode ? ['partner', 'contact'] : [])
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if filling out a form or input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        
        const currentScroll = container.scrollTop;
        const sectionHeight = container.clientHeight;
        const currentIndex = Math.round(currentScroll / sectionHeight);
        
        let targetIndex = currentIndex;

        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
          targetIndex = Math.min(currentIndex + 1, sections.length - 1 + (isVendorMode ? 0 : 1)); 
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          targetIndex = Math.max(currentIndex - 1, 0);
        }

        // Handle the dynamic end slide for non-vendor mode
        if (!isVendorMode && currentIndex === sections.length - 1 && (e.key === 'ArrowDown' || e.key === 'PageDown')) {
             container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
             return;
        }

        if (targetIndex < sections.length) {
          const targetId = sections[targetIndex];
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVendorMode]);

  return (
    <div 
      id="main-scroll-container"
      className="bg-black h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth text-white font-sans selection:bg-red-900 selection:text-white relative"
    >
      {/* 🚀 GLOBAL TEXTURE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-[200] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* 🔥 FIREFLY FLUID BACKGROUND */}
      <FireflyBackground />

      <Navbar isVendorMode={isVendorMode} onLogoSecretTrigger={toggleMode} />
      
      {/* Toast Notification for mode switch */}
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[300] pointer-events-none transition-all duration-500 flex flex-col items-center ${showToast ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-8 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] mb-4">
           {isVendorMode ? <Unlock className="text-green-500" size={64} /> : <Lock className="text-red-500" size={64} />}
        </div>
        <div className="text-xl font-black uppercase tracking-[0.3em] bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
          {isVendorMode ? "Vendor Mode Active" : "Adobe Mode Active"}
        </div>
      </div>

      {/* 1. HERO */}
      <SectionWrapper id="home">
        <HeroSlide />
      </SectionWrapper>

      {/* 2. THE MOAT (The Why) */}
      <SectionWrapper id="moat">
        <FadeIn fullWidth>
          <TheMoatSection />
        </FadeIn>
      </SectionWrapper>

      {/* NEW SECTION: The Three Pillars */}
      <SectionWrapper id="three-moats">
        <FadeIn fullWidth>
          <ThreeMoatsSection />
        </FadeIn>
      </SectionWrapper>

      {/* 3. INSIGHT STRATEGY */}
      <SectionWrapper id="insight">
        <FadeIn fullWidth>
          <InsightSlide />
        </FadeIn>
      </SectionWrapper>

      {/* 4. LINE ENGAGEMENT (Daily Sticky) */}
      <SectionWrapper id="community">
        <FadeIn fullWidth>
          <LineEngagementSection />
        </FadeIn>
      </SectionWrapper>

      {/* 5. LINE CONTENT (Knowledge) */}
      <SectionWrapper id="community-details">
        <FadeIn fullWidth delay={200}>
          <LineContentShowcase />
        </FadeIn>
      </SectionWrapper>

      {/* 6. LAB (Ice Breaking & Tools) */}
      <SectionWrapper id="lab">
        <FadeIn fullWidth>
          <BusinessAccelerationLab />
        </FadeIn>
      </SectionWrapper>

      {/* 7. PHILOSOPHY (Sales Enablement) */}
      <SectionWrapper id="philosophy">
        <FadeIn fullWidth>
          <MultiModelPhilosophySection />
        </FadeIn>
      </SectionWrapper>

      {/* 8. TIMELINE (Market Impact) */}
      <SectionWrapper id="timeline">
        <FadeIn fullWidth>
          <TimelineSlide />
        </FadeIn>
      </SectionWrapper>

      {/* VENDOR MODE SECTIONS */}
      {isVendorMode && (
        <SectionWrapper id="videos">
          <FadeIn fullWidth>
            <VideoGallery />
          </FadeIn>
        </SectionWrapper>
      )}

      {/* NEW SECTION: Firefly Models */}
      <SectionWrapper id="firefly">
        <FireflyModelsSection />
      </SectionWrapper>

      {/* NOW PUBLIC SECTIONS */}
      <SectionWrapper id="ecosystem">
        <FadeIn fullWidth>
          <ModelEcosystemSection />
        </FadeIn>
      </SectionWrapper>

      {/* 9. ACADEMY (Education) - Moved */}
      <SectionWrapper id="academy">
        <FadeIn fullWidth>
          <AcademySection />
        </FadeIn>
      </SectionWrapper>
      
      <SectionWrapper id="alliance">
        <FadeIn fullWidth>
          <StrategicAllianceSection />
        </FadeIn>
      </SectionWrapper>

      {/* 10. FLAGSHIP EVENT (Market Impact) - Moved */}
      <SectionWrapper id="flagship">
        <FadeIn fullWidth>
          <FlagshipEventSection />
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper id="strategy">
        <FadeIn fullWidth>
          <ConcentricStrategySection />
        </FadeIn>
      </SectionWrapper>

      {/* 11. KPI PROOF */}
      <SectionWrapper id="kpi">
        <FadeIn fullWidth>
          <KPIDashboard />
        </FadeIn>
      </SectionWrapper>

      {/* 12. SUMMARY (NEW) */}
      <SectionWrapper id="summary">
        <FadeIn fullWidth>
          <SummarySection />
        </FadeIn>
      </SectionWrapper>

      {isVendorMode && (
        <SectionWrapper id="partner">
          <PartnerSection />
        </SectionWrapper>
      )}

      {isVendorMode && (
        <SectionWrapper id="contact">
          <Footer />
        </SectionWrapper>
      )}
      
      {!isVendorMode && (
         <div className="h-screen snap-start flex flex-col justify-center items-center bg-black">
            <div className="text-center">
              <p className="text-gray-600 font-mono text-xs tracking-widest uppercase mb-4">End of Adobe Presentation</p>
              <h2 className="text-2xl font-black">Weblink Adobe FY26</h2>
              <p className="text-gray-700 text-[10px] mt-2 font-light tracking-wide">內容僅供 FY26 內部策略規劃使用</p>
            </div>
         </div>
      )}

      <BackToTop />
      <FloatingCTA />
      
      <div className="h-[env(safe-area-inset-bottom)] bg-black w-full print:hidden" />
    </div>
  );
}
