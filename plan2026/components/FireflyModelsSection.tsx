
import React from 'react';
import { Image as ImageIcon, PenTool, LayoutTemplate, Video, Headphones, Music, Box } from 'lucide-react';
import { FadeIn } from './ui/Motion';

const models = [
  { 
    id: 'image', 
    name: 'Firefly Image\nModel', 
    icon: ImageIcon,
    bg: 'bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'vector', 
    name: 'Firefly Vector\nModel', 
    icon: PenTool,
    bg: 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500',
    img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'design', 
    name: 'Firefly Design\nModel', 
    icon: LayoutTemplate,
    bg: 'bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500',
    img: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'video', 
    name: 'Firefly Video\nModel', 
    icon: Video,
    bg: 'bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-600',
    img: 'https://images.unsplash.com/photo-1535242208474-9a2793260ca8?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'audio', 
    name: 'Firefly Audio\nModel', 
    icon: Headphones,
    bg: 'bg-gradient-to-br from-pink-300 via-purple-500 to-indigo-500',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
  },
  { 
    id: 'sfx', 
    name: 'Firefly Sound\nEffects Model', 
    icon: Music,
    bg: 'bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-600',
    img: 'https://as2.ftcdn.net/v2/jpg/18/44/98/37/1000_F_1844983793_Ivw0RmxPAOoU2ay37Gmap51ESiskmo36.jpg'
  },
  { 
    id: '3d', 
    name: 'Firefly 3D\nModel', 
    icon: Box,
    bg: 'bg-gradient-to-br from-purple-500 via-violet-600 to-fuchsia-600',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80'
  }
];

export const FireflyModelsSection: React.FC = () => {
  return (
    <section className="min-h-screen py-10 pt-24 md:pt-10 px-6 md:px-20 border-b border-white/5 bg-[#0a0a0a] flex flex-col justify-center items-center overflow-hidden relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
            {/* Header */}
            <FadeIn delay={100} className="flex items-center gap-3 md:gap-5 mb-12 md:mb-20">
                <img 
                    src="https://adbeweblink.github.io/myproject/images/fl.png" 
                    alt="Firefly Logo" 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_0_25px_rgba(255,50,50,0.6)]"
                />
                <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter drop-shadow-lg">
                    Adobe Firefly Models
                </h2>
            </FadeIn>

            {/* Models Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 w-full px-2">
                {models.map((model, idx) => (
                    <div 
                        key={model.id} 
                        className="flex flex-col items-center group"
                    >
                        <FadeIn delay={200 + idx * 100} className="w-full flex flex-col items-center">
                            <div className="relative w-full aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 border border-white/10 group-hover:border-white/40 transition-all duration-500 shadow-2xl group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-default bg-gray-900">
                                {/* Background Gradient */}
                                <div className={`absolute inset-0 ${model.bg} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                                
                                {/* Image Layer */}
                                <img 
                                    src={model.img} 
                                    alt={model.name}
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen grayscale group-hover:grayscale-0"
                                />
                                
                                {/* Inner Shadow & Glass */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-white/5 opacity-80"></div>
                                
                                {/* Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <model.icon size={40} className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" strokeWidth={1.5} />
                                </div>
                            </div>
                            
                            <h3 className="text-gray-300 font-bold text-center text-xs md:text-sm leading-tight whitespace-pre-line group-hover:text-white transition-colors duration-300">
                                {model.name}
                            </h3>
                        </FadeIn>
                    </div>
                ))}
            </div>

            {/* Footer Text */}
            <FadeIn delay={1000} className="mt-16 md:mt-24 text-center">
                <h3 className="text-2xl md:text-4xl font-black text-white mb-3 tracking-tight drop-shadow-2xl">
                    Commercially safe
                </h3>
                <p className="text-lg md:text-2xl font-bold text-gray-400 tracking-widest border-t border-white/10 pt-4 px-8 inline-block">
                    「商用合規、安全可用」
                </p>
            </FadeIn>
        </div>
    </section>
  );
};
