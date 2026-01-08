
import React, { useState, useEffect } from 'react';
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
        'Adobe Creator Link', 
        '2025.11.06 • 年度旗艦盛會回顧', 
        'https://www.youtube.com/watch?v=ZC8IGGPqZXk',
        'https://img.youtube.com/vi/ZC8IGGPqZXk/maxresdefault.jpg'
      ), 
      createVideo(
        'v2025-2', 
        'MeTec 2025 影視尖端技術展', 
        '2025.07.02 • 影視尖端技術實戰', 
        'https://www.youtube.com/watch?v=bPvUkr4QpqU',
        'https://img.youtube.com/vi/bPvUkr4QpqU/maxresdefault.jpg'
      ),
      createVideo(
        'v2025-3', 
        'Adobe 設計新境界 x NVIDIA Studio', 
        '2025.04.17 • 軟硬體整合與 AI', 
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
        'Creator Solutions Day 2024', 
        '2024.08.30 • Apple 平台高效創意', 
        'https://www.youtube.com/watch?v=nSsxIx4nkcc',
        'https://img.youtube.com/vi/nSsxIx4nkcc/maxresdefault.jpg'
      )
    ],
    '2023': [
      createVideo(
        'v2023-1', 
        'Best of Adobe MAX 2023', 
        '2023.10.19 • 全球年度技術黑科技', 
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
        'MG 實體研討會 x Motioner', 
        '2022.08.26 • Motion Design 專業交流', 
        'https://www.youtube.com/watch?v=gP-FmdWF9CQ',
        'https://img.youtube.com/vi/gP-FmdWF9CQ/maxresdefault.jpg'
      ),
      createVideo(
        'v2022-1', 
        '創作者解決方案大會', 
        '2022.07.06 • 創意生態系整合元年', 
        'https://www.youtube.com/watch?v=EDzmK_jBV8o',
        'https://img.youtube.com/vi/EDzmK_jBV8o/maxresdefault.jpg'
      )
    ]
  };

  // Keyboard navigation for years
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if this section is currently visible
      const section = document.getElementById('videos');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= -window.innerHeight / 2 && rect.bottom <= window.innerHeight * 1.5;
      
      if (isVisible) {
        // Years are string keys, need to sort them desc
        const sortedYears = Object.keys(videos).sort((a, b) => Number(b) - Number(a));
        const currentIndex = sortedYears.indexOf(activeYear);
        
        if (e.key === 'ArrowLeft') {
          // Newer year (prev index in desc sorted array)
          const nextIndex = (currentIndex - 1 + sortedYears.length) % sortedYears.length;
          setActiveYear(sortedYears[nextIndex]);
        } else if (e.key === 'ArrowRight') {
          // Older year (next index in desc sorted array)
          const nextIndex = (currentIndex + 1) % sortedYears.length;
          setActiveYear(sortedYears[nextIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeYear]);

  return (
    <section className="min-h-screen py-10 px-6 md:px-20 border-b border-white/5 flex flex-col justify-center bg-[#111] overflow-hidden">
      {/* 
         調整說明：
         1. 移除 w-full h-full，改用 flex-col justify-center 讓內容自然垂直居中。
         2. 年份按鈕區塊增加 -mt-4 負邊距，抵銷 SectionHeading 的部分下邊距，讓標題跟內容更緊湊。
         3. Grid 移除 flex-1，避免撐開高度導致分散。
      */}
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-center">
        <SectionHeading title="Weblink 近年行銷足跡" subtitle="Marketing Milestones" color="bg-orange-500" />
        
        {/* 年份選擇器：增加負 margin-top 拉近與標題距離，減少 margin-bottom */}
        <div className="flex gap-4 mb-5 overflow-x-auto pb-2 no-scrollbar shrink-0 -mt-2 md:-mt-5">
          {Object.keys(videos).sort((a,b) => Number(b) - Number(a)).map(year => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`
                px-5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap border
                ${activeYear === year 
                  ? 'bg-white text-black border-white scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                  : 'bg-gray-800/50 text-gray-400 border-white/5 hover:bg-gray-700 hover:text-white hover:border-white/20'}
              `}
            >
              {year} 年度
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-center">
          {videos[activeYear].map((video) => (
            <div 
              key={video.id} 
              className="group cursor-pointer flex flex-col h-fit" 
              onClick={() => window.open(video.url, '_blank')}
            >
              <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden border border-gray-800 group-hover:border-orange-500 transition-all duration-500 shadow-2xl shrink-0">
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
                   <div className="bg-orange-600/90 text-white p-3 rounded-full scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl">
                      <Play size={20} fill="white" />
                   </div>
                </div>
                {/* Visual Label for Date */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[9px] font-bold px-2 py-1 rounded-md flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Calendar size={10} className="text-orange-400" />
                  {video.desc.split(' • ')[0]}
                </div>
              </div>
              
              <div className="mt-3 flex flex-col">
                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors leading-tight line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-500 text-[11px] mt-1 font-medium line-clamp-1">
                  {video.desc.split(' • ')[1] || video.desc}
                </p>
                
                <div className="mt-2 flex items-center text-[9px] font-bold text-gray-600 uppercase tracking-widest group-hover:text-white transition-colors">
                  <span>Watch</span>
                  <div className="h-px bg-gray-800 flex-1 mx-2 group-hover:bg-orange-900/50 transition-colors" />
                  <Play size={10} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
          {/* Empty Placeholder for consistency if items are few */}
          {videos[activeYear].length < 3 && (
             <div className="hidden lg:flex flex-col items-center justify-center border border-dashed border-white/5 rounded-2xl bg-white/2 min-h-[200px]">
                <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center mb-2">
                   <Play size={16} className="text-gray-800" />
                </div>
                <span className="text-[9px] text-gray-800 font-bold uppercase tracking-widest">Archive Active</span>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};
