import React, { useState, useRef } from 'react';
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
        { name: "Gemini 2.5", sub: "Nano Banana", type: "image" },
        { name: "Imagen 4", type: "image" },
        { name: "Imagen 3", type: "image" },
        { name: "Veo 3.1 Fast", type: "video" },
        { name: "Veo 2", type: "video" }
      ],
      color: "border-blue-500/50",
      bg: "bg-blue-900/10",
      text: "text-blue-400"
    },
    {
      name: "Runway",
      models: [
        { name: "Gen-4", type: "video" },
        { name: "Gen-4 Image", type: "image" },
        { name: "Aleph", type: "video" }
      ],
      color: "border-pink-500/50",
      bg: "bg-pink-900/10",
      text: "text-pink-400"
    },
    {
      name: "Black Forest Labs",
      models: [
        { name: "Flux .1 Kontext", sub: "Max", type: "image" },
        { name: "Flux .1 Kontext", sub: "Pro", type: "image" },
        { name: "Flux 1.1 Pro", type: "image" },
        { name: "Flux 1.1 Ultra", sub: "Raw Supported", type: "image" }
      ],
      color: "border-gray-500/50",
      bg: "bg-gray-800/50",
      text: "text-gray-200"
    },
    {
      name: "Luma AI",
      models: [
        { name: "Ray3", type: "video" },
        { name: "Ray3 HDR", type: "video" },
        { name: "Ray2", type: "video" }
      ],
      color: "border-cyan-500/50",
      bg: "bg-cyan-900/10",
      text: "text-cyan-400"
    },
    {
      name: "OpenAI",
      models: [
        { name: "GPT Image", type: "image" }
      ],
      color: "border-green-500/50",
      bg: "bg-green-900/10",
      text: "text-green-400"
    },
    {
      name: "Ideogram",
      models: [
        { name: "Ideogram 3.0", type: "image" }
      ],
      color: "border-orange-500/50",
      bg: "bg-orange-900/10",
      text: "text-orange-400"
    },
    {
      name: "Topaz Labs",
      models: [
        { name: "Bloom", type: "image" },
        { name: "Gigapixel", type: "image" }
      ],
      color: "border-yellow-500/50",
      bg: "bg-yellow-900/10",
      text: "text-yellow-400"
    },
    {
      name: "ElevenLabs",
      models: [
        { name: "Multilingual v2", type: "audio" }
      ],
      color: "border-indigo-500/50",
      bg: "bg-indigo-900/10",
      text: "text-indigo-400"
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
      name: "Pika",
      models: [
        { name: "Pika 2.2", type: "video" }
      ],
      color: "border-red-500/50",
      bg: "bg-red-900/10",
      text: "text-red-400"
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

  const TabButton = ({ type, label, icon: Icon }: { type: FilterType, label: string, icon: any }) => (
    <button
      onClick={() => setActiveFilter(type)}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold transition-all duration-300 whitespace-nowrap
        ${activeFilter === type 
          ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
          : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
        }
      `}
    >
      <Icon size={14} />
      {label}
    </button>
  );

  return (
    <section className="h-screen py-10 px-6 md:px-20 border-b border-white/5 bg-[#111111] flex flex-col justify-center overflow-hidden">
       <div className="max-w-7xl mx-auto w-full shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <SectionHeading 
              title="Adobe Partner Models Ecosystem" 
              subtitle="Open Integration" 
              color="bg-white" 
            />
            
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2 justify-end">
                 <TabButton type="all" label="All" icon={Filter} />
                 <TabButton type="image" label="Image" icon={ImageIcon} />
                 <TabButton type="video" label="Video" icon={Video} />
                 <TabButton type="audio" label="Audio" icon={Mic} />
              </div>
              <div className="flex gap-2 justify-end">
                <button 
                  onClick={() => scroll('left')} 
                  className="p-2 rounded-full border border-white/10 text-white hover:bg-white/10 transition"
                  aria-label="Scroll Left"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => scroll('right')} 
                  className="p-2 rounded-full border border-white/10 text-white hover:bg-white/10 transition"
                  aria-label="Scroll Right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 px-6 md:px-20 -mx-6 md:-mx-20"
        >
          <div className="flex gap-6 px-6 md:px-20">
            {filteredPartners.map((partner, idx) => {
              const visibleModels = getFilteredModels(partner.models);
              
              return (
                <div 
                  key={idx} 
                  className={`
                    snap-center shrink-0 w-[280px] md:w-[320px]
                    rounded-2xl border ${partner.color} ${partner.bg} p-6 relative overflow-hidden group 
                    hover:scale-[1.02] transition-all duration-500
                    animate-in fade-in zoom-in-95 fill-mode-both flex flex-col
                  `}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className={`text-lg font-black mb-5 ${partner.text} flex items-center justify-between uppercase tracking-tight`}>
                    {partner.name}
                    <div className="bg-white/5 p-1.5 rounded-lg">
                      <Wand2 size={16} className="opacity-50" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 flex-1">
                    {visibleModels.map((model: any, mIdx: number) => (
                      <div key={mIdx} className="bg-black/40 rounded-xl p-3 border border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors">
                        <div>
                          <div className="text-white font-bold text-xs">{model.name}</div>
                          {model.sub && <div className="text-gray-500 text-[9px] font-mono uppercase tracking-wider mt-0.5">{model.sub}</div>}
                        </div>
                        <div className={`p-1.5 rounded-lg bg-white/5 text-gray-500`}>
                            {getTypeIcon(model.type)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[9px] text-gray-500 font-black uppercase tracking-[0.2em]">Verified Partner</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPartners.length === 0 && (
             <div className="w-full flex flex-col items-center justify-center py-20 text-center text-gray-600 border border-dashed border-white/10 rounded-2xl mx-20">
                <Wand2 size={48} className="mb-4 opacity-10" />
                <p className="text-sm font-bold uppercase tracking-widest">No matching models found</p>
             </div>
          )}
       </div>
    </section>
  );
};