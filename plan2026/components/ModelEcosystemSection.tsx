
import React, { useState, useRef, useEffect } from 'react';
import { 
  Image as ImageIcon,
  Video,
  Mic,
  Wand2,
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { SectionHeading } from './ui/Shared';

type FilterType = 'all' | 'image' | 'video' | 'audio';

export const ModelEcosystemSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const partners = [
    {
      name: "Google",
      models: [
        { name: "Gemini 2.5 Flash", sub: "Nano Banana (Img/Vec)", type: "image" },
        { name: "Gemini 3", sub: "Nano Banana Pro", type: "image" },
        { name: "Veo 3.1", type: "video" },
        { name: "Veo 3.1 Fast", type: "video" },
        { name: "Veo 2", type: "video" },
        { name: "Imagen 4", type: "image" },
        { name: "Imagen 3", type: "image" }
      ],
      color: "border-blue-500/50",
      bg: "bg-blue-900/10",
      text: "text-blue-400"
    },
    {
      name: "OpenAI",
      models: [
        { name: "GPT Image", sub: "Vector Supported", type: "image" },
        { name: "Sora 2", type: "video" },
        { name: "Sora 2 Pro", type: "video" }
      ],
      color: "border-green-500/50",
      bg: "bg-green-900/10",
      text: "text-green-400"
    },
    {
      name: "Black Forest Labs",
      models: [
        { name: "FLUX.2", type: "image" },
        { name: "FLUX1.1", type: "image" },
        { name: "FLUX.1 Kontext", sub: "Pro / MAX", type: "image" },
        { name: "FLUX1.1 Pro Ultra", type: "image" }
      ],
      color: "border-gray-500/50",
      bg: "bg-gray-800/50",
      text: "text-gray-200"
    },
    {
      name: "Luma AI",
      models: [
        { name: "Ray3", sub: "SDR / HDR", type: "video" },
        { name: "Ray2", sub: "Flash / Standard", type: "video" }
      ],
      color: "border-cyan-500/50",
      bg: "bg-cyan-900/10",
      text: "text-cyan-400"
    },
    {
      name: "Runway",
      models: [
        { name: "Gen-4", sub: "Video / Image", type: "video" },
        { name: "Aleph", type: "video" }
      ],
      color: "border-pink-500/50",
      bg: "bg-pink-900/10",
      text: "text-pink-400"
    },
    {
      name: "Pika Labs",
      models: [
        { name: "Pika 2.2", type: "video" }
      ],
      color: "border-red-500/50",
      bg: "bg-red-900/10",
      text: "text-red-400"
    },
    {
      name: "Ideogram",
      models: [
        { name: "Ideogram 3.0", sub: "Image / Vector", type: "image" }
      ],
      color: "border-orange-500/50",
      bg: "bg-orange-900/10",
      text: "text-orange-400"
    },
    {
      name: "Topaz Labs",
      models: [
        { name: "Gigapixel", sub: "Image Upscale", type: "image" },
        { name: "Bloom", sub: "Creative Upscale", type: "image" },
        { name: "Sharpen", sub: "Detail Recovery", type: "image" },
        { name: "Denoise", sub: "Noise Reduction", type: "image" },
        { name: "Astra", sub: "Video Upscale", type: "video" }
      ],
      color: "border-yellow-500/50",
      bg: "bg-yellow-900/10",
      text: "text-yellow-400"
    },
    {
      name: "Moonvalley",
      models: [
        { name: "Marey", type: "video" }
      ],
      color: "border-purple-500/50",
      bg: "bg-purple-900/10",
      text: "text-purple-400"
    },
    {
      name: "ElevenLabs",
      models: [
        { name: "Multilingual v2", type: "audio" }
      ],
      color: "border-indigo-500/50",
      bg: "bg-indigo-900/10",
      text: "text-indigo-400"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'video': return <Video size={14} />;
      case 'audio': return <Mic size={14} />;
      case 'image': default: return <ImageIcon size={14} />;
    }
  };

  const getFilteredModels = (models: any[]) => {
    if (activeFilter === 'all') return models;
    return models.filter(m => m.type === activeFilter);
  };

  const filteredPartners = partners.filter(p => {
    if (activeFilter === 'all') return true;
    return p.models.some(m => m.type === activeFilter);
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Keyboard navigation for Horizontal Scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if this section is currently visible
      const section = document.getElementById('ecosystem');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= -window.innerHeight / 2 && rect.bottom <= window.innerHeight * 1.5;
      
      if (isVisible) {
        if (e.key === 'ArrowLeft') {
          scroll('left');
        } else if (e.key === 'ArrowRight') {
          scroll('right');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const TabButton = ({ type, label, icon: Icon }: { type: FilterType, label: string, icon: any }) => (
    <button
      onClick={() => setActiveFilter(type)}
      className={`
        flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold transition-all duration-300 whitespace-nowrap
        ${activeFilter === type 
          ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
          : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
        }
      `}
    >
      <Icon size={12} />
      {label}
    </button>
  );

  return (
    <section className="min-h-screen border-b border-white/5 bg-[#111111] flex flex-col justify-start md:justify-center overflow-hidden" id="ecosystem">
        
        {/* Header Section - Constrained Width to Align with Site Layout */}
        <div className="w-full max-w-[90rem] mx-auto px-6 md:px-20 pt-24 md:pt-10 mb-2">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <SectionHeading 
                title="Adobe Partner Model Ecosystem" 
                subtitle="Ecosystem Layer 1: Model Integration" 
                color="bg-green-500" 
            />

            <div className="flex flex-wrap gap-2">
                <TabButton type="all" label="All Models" icon={Filter} />
                <TabButton type="image" label="Image & Vector" icon={ImageIcon} />
                <TabButton type="video" label="Video Generation" icon={Video} />
                <TabButton type="audio" label="Audio & Speech" icon={Mic} />
            </div>
            </div>
        </div>

        {/* Scroll Container - Full Width (Bleed to Edge) */}
        {/* Removes the black edges on the side by allowing overflow and full width */}
        <div className="relative group/scroll flex-1 md:flex-none w-full">
           
           {/* Scroll Buttons - Positioned near edges */}
           <button 
              onClick={() => scroll('left')}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white opacity-0 group-hover/scroll:opacity-100 hover:bg-white/20 transition-all backdrop-blur-md hidden md:flex"
           >
              <ChevronLeft size={24} />
           </button>
           <button 
              onClick={() => scroll('right')}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white opacity-0 group-hover/scroll:opacity-100 hover:bg-white/20 transition-all backdrop-blur-md hidden md:flex"
           >
              <ChevronRight size={24} />
           </button>

           <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto h-full items-stretch px-6 md:px-20 py-12 snap-x snap-mandatory no-scrollbar"
           >
              {filteredPartners.map((partner, idx) => (
                <div 
                  key={idx} 
                  className={`
                    snap-center shrink-0 w-[280px] md:w-[320px] 
                    rounded-3xl border ${partner.color} bg-gray-900/40 backdrop-blur-sm
                    flex flex-col overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,0,0,0.6)]
                    hover:scale-[1.05] relative hover:z-10
                  `}
                >
                  {/* Card Header */}
                  <div className={`p-5 border-b border-white/5 ${partner.bg}`}>
                     <div className="flex justify-between items-center mb-1">
                        <div className={`text-xl font-black text-white`}>{partner.name}</div>
                        <Wand2 size={16} className={partner.text} />
                     </div>
                     <div className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                       {getFilteredModels(partner.models).length} Active Models
                     </div>
                  </div>

                  {/* Models List - Enhanced for Full Visibility */}
                  <div className="p-2 overflow-y-auto flex-1 custom-scrollbar min-h-[200px]">
                     <div className="space-y-1">
                        {getFilteredModels(partner.models).map((model: any, mIdx: number) => (
                          <div 
                            key={mIdx} 
                            className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                          >
                             <div className={`w-8 h-8 rounded-lg ${partner.bg} flex items-center justify-center ${partner.text} shrink-0`}>
                                {getTypeIcon(model.type)}
                             </div>
                             
                             <div className="flex-1 min-w-0">
                                <div className="text-sm font-bold text-gray-200 group-hover:text-white truncate">
                                  {model.name}
                                </div>
                                {model.sub && (
                                  <div className="text-[10px] text-gray-500 truncate group-hover:text-gray-400">
                                    {model.sub}
                                  </div>
                                )}
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
                </div>
              ))}
           </div>
        </div>

        <div className="w-full text-center pb-8 pt-0 animate-pulse">
           <p className="text-gray-500 text-[10px] md:text-xs font-mono tracking-widest uppercase">
              Creativity &gt; AI Model &gt; Firefly Boards &gt; Creative Cloud
           </p>
        </div>

    </section>
  );
};
