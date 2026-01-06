
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

export const Card: React.FC<CardProps> = ({ children, className = "", hoverEffect = true }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // 內部內容視差位移 (Factor 越小位移越細微，創造空間深度)
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
        relative bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 
        transition-all duration-500 overflow-hidden group ${className}
        ${hoverEffect ? 'hover:border-white/20 hover:bg-gray-800/50' : ''}
      `}
    >
      {/* Dynamic Light Border Effect */}
      {hoverEffect && isHovering && (
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 80%)`
          }}
        />
      )}
      
      {/* Light Edge Beam */}
      {hoverEffect && isHovering && (
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-40"
          style={{
            background: `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.3), transparent 60%)`,
            WebkitMaskImage: 'linear-gradient(black, black)',
            maskImage: 'linear-gradient(black, black)',
            padding: '1px'
          }}
        />
      )}

      {/* Internal Parallax Content */}
      <div 
        className="relative z-10" 
        style={getParallaxStyle()}
      >
        {children}
      </div>
    </div>
  );
};
