
import React, { useState, useRef } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  color?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, color = "bg-red-600" }) => {
  // Determine text gradient based on the bar color to match the "Core Vision" aesthetic
  let textGradient = "from-white via-gray-200 to-gray-500"; // Default metallic

  if (color.includes("blue")) textGradient = "from-white via-blue-100 to-gray-400";
  else if (color.includes("purple")) textGradient = "from-white via-purple-100 to-gray-400";
  else if (color.includes("red")) textGradient = "from-white via-red-100 to-gray-400";
  else if (color.includes("orange")) textGradient = "from-white via-orange-100 to-gray-400";
  else if (color.includes("yellow")) textGradient = "from-white via-yellow-100 to-gray-400";
  else if (color.includes("green")) textGradient = "from-white via-green-100 to-gray-400";
  else if (color.includes("indigo")) textGradient = "from-white via-indigo-100 to-gray-400";
  else if (color.includes("pink")) textGradient = "from-white via-pink-100 to-gray-400";
  else if (color.includes("cyan")) textGradient = "from-white via-cyan-100 to-gray-400";

  return (
    <div className="mb-6 md:mb-8 shrink-0">
      <div className={`w-16 h-1.5 ${color} mb-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)]`} />
      {subtitle && (
        <p className="text-gray-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-2 animate-pulse">
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl md:text-5xl font-black tracking-tighter leading-tight text-balance drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r ${textGradient}`}>
        {title}
      </h2>
    </div>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

/**
 * Card Component with Real Glassmorphism and Spotlight Effect
 * 1. Spotlight: Tracks mouse position to illuminate borders and surface.
 * 2. Glassmorphism: Uses noise texture, backdrop-blur, and layered borders for physical thickness.
 */
export const Card: React.FC<CardProps> = ({ children, className = "", hoverEffect = true }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  // Parallax effect for content
  const getParallaxStyle = (factor: number = 0.02) => {
    if (!isHovering || !cardRef.current) return {};
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const moveX = (mousePos.x - centerX) * factor;
    const moveY = (mousePos.y - centerY) * factor;
    return { 
      transform: `translate(${moveX}px, ${moveY}px)`,
      transition: 'transform 0.1s ease-out'
    };
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`
        relative rounded-3xl p-6 md:p-8 
        transition-all duration-500 overflow-hidden group
        backdrop-blur-xl
        ${className}
      `}
      style={{
        // Base Glass Background (Dark)
        backgroundColor: 'rgba(20, 20, 20, 0.4)', 
        // Real Glass Shadow
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* 
         --- REAL GLASSMORPHISM LAYERS --- 
      */}

      {/* 1. Noise Texture Layer (Provides the physical "grain") */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none z-0 mix-blend-overlay"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      />

      {/* 2. Static Glass Border (Base structural border) */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none z-[1]"></div>
      
      {/* 3. Inner Gloss Highlight (Top-Left Light Source) */}
      <div 
        className="absolute inset-0 rounded-3xl pointer-events-none z-[1]"
        style={{
          boxShadow: 'inset 1px 1px 0 0 rgba(255, 255, 255, 0.15), inset -1px -1px 0 0 rgba(0, 0, 0, 0.3)'
        }}
      ></div>

      {/* 
         --- SPOTLIGHT EFFECTS --- 
      */}

      {/* 4. Spotlight Border (Illuminates the edge based on mouse) */}
      <div 
        className="absolute inset-0 rounded-3xl pointer-events-none z-[2] transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.4), transparent 40%)`,
          // Use mask to only show the border area
          maskImage: 'linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)',
          maskClip: 'content-box, border-box',
          maskComposite: 'exclude',
          padding: '1.5px', // Thickness of the illuminated border
          WebkitMaskComposite: 'xor', // Safari support
        }}
      />

      {/* 5. Spotlight Glow (Surface illumination) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      {/* 
         --- CONTENT LAYER --- 
      */}
      <div 
        className="relative z-10 h-full" 
        style={getParallaxStyle()}
      >
        {children}
      </div>
    </div>
  );
};
