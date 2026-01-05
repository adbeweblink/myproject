import React, { useState } from 'react';
import { Play, Calendar } from 'lucide-react';
import { SectionHeading } from './ui/Shared';
import { VideoItem } from '../types';

export const VideoGallery: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string>('2025');
  
  // Helper to construct video objects
  const createVideo = (id: string, title: string, desc: string, url: string, image: string): VideoItem => ({
    id,
    title,
    desc,
    url,
    image
  });

  const videos: Record<string, VideoItem[]> = {
    '2025': [
      createVideo(
        'v2025-1', 
        'Adobe Creator Link【創意進行式｜AI 亮點× 創意】', 
        '2025.11.06 • 年度旗艦盛會回顧', 
        'https://www.youtube.com/watch?v=ZC8IGGPqZXk',
        'https://img.youtube.com/vi/ZC8IGGPqZXk/maxresdefault.jpg'
      ), 
      createVideo(
        'v2025-2', 
        'MeTec 2025 影視尖端技術展-Creators Solutions Day', 
        '2025.07.02 • 影視尖端技術實戰', 
        'https://www.youtube.com/watch?v=bPvUkr4QpqU',
        'https://img.youtube.com/vi/bPvUkr4QpqU/maxresdefault.jpg'
      ),
      createVideo(
        'v2025-3', 
        'Adobe 設計新境界 x NVIDIA Studio 高效能時代', 
        '2025.04.17 • 軟硬體整合與 AI 算力方案', 
        'https://www.youtube.com/watch?v=nusAL35BL90',
        'https://img.youtube.com/vi/nusAL35BL90/maxresdefault.jpg'
      )
    ],
    '2024': [
      createVideo(
        'v2024-2', 
        'BEST OF MAX 2024 「創意奇點」', 
        '2024.10.25 • 年度技術黑科技發表', 
        'https://www.youtube.com/watch?v=CzpT7mJNbJg',
        'https://img.youtube.com/vi/CzpT7mJNbJg/maxresdefault.jpg'
      ),
      createVideo(
        'v2024-1', 
        'Creator Solutions Day 2024｜在 Apple 平台上打造創意盛會！', 
        '2024.08.30 • Apple 平台高效創意工作流', 
        'https://www.youtube.com/watch?v=nSsxIx4nkcc',
        'https://img.youtube.com/vi/nSsxIx4nkcc/maxresdefault.jpg'
      )
    ],
    '2023': [
      createVideo(
        'v2023-1', 
        'Best of Adobe MAX 2023 「迎向設計奇異點」', 
        '2023.10.19 • 全球年度技術黑科技解密', 
        'https://www.youtube.com/watch?v=6losy9ZuIzQ',
        'https://img.youtube.com/vi/6losy9ZuIzQ/maxresdefault.jpg'
      ),
      createVideo(
        'v2023-2', 
        'Creator Solutions Day 2023', 
        '2023.07.12 • 創意解決方案實務', 
        'https://www.youtube.com/watch?v=ulBHy756LBo',
        'https://img.youtube.com/vi/ulBHy756LBo/maxresdefault.jpg'
      )
    ],
    '2022': [
      createVideo(
        'v2022-2', 
        '展碁國際攜 Motioner 二棲知學舉辦 MG 實體研討會', 
        '2022.08.26 • Motion Design 專業交流', 
        'https://www.youtube.com/watch?v=gP-FmdWF9CQ',
        'https://img.youtube.com/vi/gP-FmdWF9CQ/maxresdefault.jpg'
      ),
      createVideo(
        'v2022-1', 
        '展碁國際攜 Motioner 二棲知學舉辦創作者解決方案大會', 
        '2022.07.06 • 創意生態系整合元年', 
        'https://www.youtube.com/watch?v=EDzmK_jBV8o',
        'https://img.youtube.com/vi/EDzmK_jBV8o/maxresdefault.jpg'
      )
    ]
  };

  return (
    <section className="min-h-screen py-20 px-6 md:px-20 border-b border-white/5 flex flex-col justify-center bg-[#111]">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading title="Weblink 行銷足跡" subtitle="Marketing Milestones" color="bg-orange-500" />
        
        <div className="flex gap-4 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {Object.keys(videos).sort((a,b) => Number(b) - Number(a)).map(year => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`
                px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap border
                ${activeYear === year 
                  ? 'bg-white text-black border-white scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                  : 'bg-gray-800/50 text-gray-400 border-white/5 hover:bg-gray-700 hover:text-white hover:border-white/20'}
              `}
            >
              {year} 年度
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos[activeYear].map((video) => (
            <div 
              key={video.id} 
              className="group cursor-pointer flex flex-col h-full" 
              onClick={() => window.open(video.url, '_blank')}
            >
              <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 group-hover:border-orange-500 transition-all duration-500 shadow-2xl">
                <img 
                  src={video.image} 
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-700"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-orange-600/90 text-white p-4 rounded-full scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl">
                      <Play size={24} fill="white" />
                   </div>
                </div>
                {/* Visual Label for Date */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Calendar size={12} className="text-orange-400" />
                  {video.desc.split(' • ')[0]}
                </div>
              </div>
              
              <div className="mt-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-tight line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 font-medium">
                  {video.desc.split(' • ')[1] || video.desc}
                </p>
                
                <div className="mt-auto pt-4 flex items-center text-[10px] font-bold text-gray-600 uppercase tracking-widest group-hover:text-white transition-colors">
                  <span>Watch Recap</span>
                  <div className="h-px bg-gray-800 flex-1 mx-3 group-hover:bg-orange-900/50 transition-colors" />
                  <Play size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
          {/* Empty Placeholder for consistency if items are few */}
          {videos[activeYear].length < 3 && (
             <div className="hidden lg:flex flex-col items-center justify-center border border-dashed border-white/5 rounded-2xl bg-white/2 min-h-[200px]">
                <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center mb-2">
                   <Play size={20} className="text-gray-800" />
                </div>
                <span className="text-[10px] text-gray-800 font-bold uppercase tracking-widest">Archive Active</span>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};