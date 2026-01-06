
import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlide } from './components/HeroSlide';
import { InsightSlide } from './components/InsightSlide';
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
import { CoreVisionSection } from './components/CoreVisionSection';
import { KPIDashboard } from './components/KPIDashboard';
import { PartnerSection } from './components/PartnerSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { BackToTop } from './components/BackToTop';
import { FadeIn } from './components/ui/Motion';
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
      className={`w-full min-h-screen snap-start flex flex-col justify-center transition-all duration-300 ease-out will-change-transform ${bgColor} pt-20 md:pt-0`}
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
      'insight',
      'community',
      'community-details',
      'lab',
      'timeline',
      'academy',
      'flagship',
      ...(isVendorMode ? ['videos'] : []),
      'philosophy',
      ...(isVendorMode ? ['ecosystem', 'vision'] : []),
      'alliance',
      'kpi',
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
          targetIndex = Math.min(currentIndex + 1, sections.length - 1 + (isVendorMode ? 0 : 1)); // +1 for the non-vendor end slide if needed, strictly sticking to ID list though.
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
          targetIndex = Math.max(currentIndex - 1, 0);
        }

        // Handle the dynamic end slide for non-vendor mode which doesn't have an ID in the list
        // If we are at the end of the list and press down, and not in vendor mode, just scroll to bottom
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

      <SectionWrapper id="home">
        <HeroSlide />
      </SectionWrapper>

      <SectionWrapper id="insight">
        <FadeIn fullWidth>
          <InsightSlide />
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper id="community">
        <FadeIn fullWidth>
          <LineEngagementSection />
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper id="community-details">
        <FadeIn fullWidth delay={200}>
          <LineContentShowcase />
        </FadeIn>
      </SectionWrapper>

      {/* 🧪 NEW LAB SECTION */}
      <SectionWrapper id="lab">
        <FadeIn fullWidth>
          <BusinessAccelerationLab />
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper id="timeline">
        <FadeIn fullWidth>
          <TimelineSlide />
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper id="academy">
        <FadeIn fullWidth>
          <AcademySection />
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper id="flagship">
        <FadeIn fullWidth>
          <FlagshipEventSection />
        </FadeIn>
      </SectionWrapper>

      {isVendorMode && (
        <SectionWrapper id="videos">
          <FadeIn fullWidth>
            <VideoGallery />
          </FadeIn>
        </SectionWrapper>
      )}

      <SectionWrapper id="philosophy">
        <FadeIn fullWidth>
          <MultiModelPhilosophySection />
        </FadeIn>
      </SectionWrapper>

      {isVendorMode && (
        <SectionWrapper id="ecosystem">
          <FadeIn fullWidth>
            <ModelEcosystemSection />
          </FadeIn>
        </SectionWrapper>
      )}

      {isVendorMode && (
        <SectionWrapper id="vision">
          <FadeIn fullWidth>
            <CoreVisionSection />
          </FadeIn>
        </SectionWrapper>
      )}

      <SectionWrapper id="alliance">
        <FadeIn fullWidth>
          <StrategicAllianceSection />
        </FadeIn>
      </SectionWrapper>

      <SectionWrapper id="kpi">
        <FadeIn fullWidth>
          <KPIDashboard />
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
            </div>
         </div>
      )}

      <BackToTop />
      <FloatingCTA />
      
      <div className="h-[env(safe-area-inset-bottom)] bg-black w-full print:hidden" />
    </div>
  );
}
