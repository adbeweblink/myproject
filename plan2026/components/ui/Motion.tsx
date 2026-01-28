
import React, { useRef, useEffect, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  fullWidth?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = "",
  fullWidth = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(30px)';
        case 'down': return 'translateY(-30px)';
        case 'left': return 'translateX(30px)';
        case 'right': return 'translateX(-30px)';
        default: return 'none';
      }
    }
    return 'translate(0)';
  };

  return (
    <div
      ref={ref}
      className={`${className} ${fullWidth ? 'w-full' : ''} transition-all duration-[1200ms] cubic-bezier(0.22, 1, 0.36, 1)`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export const ParallaxBackground: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const container = document.getElementById('main-scroll-container');
    const handleScroll = () => {
      if (container) setOffset(container.scrollTop * 0.15);
    };
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
      <div 
        className="absolute inset-0 flex flex-wrap gap-20 p-20 justify-around items-center"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="w-px h-64 bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-[35deg]"
            style={{ marginTop: `${Math.random() * 200}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export const Magnetic: React.FC<{ children: React.ReactElement; strength?: number }> = ({ children, strength = 0.5 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
      }}
      className="inline-block"
    >
      {children}
    </div>
  );
};

/**
 * FireflyBackground
 * 產生跟隨滑鼠的「螢火蟲」光暈效果，模擬 Adobe Firefly 的漸層流體感。
 */
export const FireflyBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // 使用 requestAnimationFrame 優化效能
      requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div 
        className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-red-600/20 blur-[100px] rounded-full mix-blend-screen transition-transform duration-300 ease-out will-change-transform opacity-60"
        style={{
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
        }}
      />
      {/* 增加第二層光暈，製造層次感 */}
      <div 
        className="absolute w-[300px] h-[300px] bg-white/10 blur-[60px] rounded-full mix-blend-overlay transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate(${mousePosition.x - 150}px, ${mousePosition.y - 150}px)`,
        }}
      />
    </div>
  );
};
