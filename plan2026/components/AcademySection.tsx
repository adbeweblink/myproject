
import React, { useState, useEffect } from 'react';
import { TrendingUp, Award, Clock, ChevronLeft, ChevronRight, Calendar, BrainCircuit, Sparkles, Fingerprint } from 'lucide-react';
import { SectionHeading } from './ui/Shared';
import { CourseItem } from '../types';

export const AcademySection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses: CourseItem[] = [
    {
      id: 1,
      month: 'JAN',
      date: '2026.01.28',
      title: 'Behance 物語 Adobe MG 動畫 AI 講座',
      desc: '探索 Firefly 在 Motion Graphics 的應用，解析 AI 如何加速動畫製作流程。',
      level: 'Motion Design',
      tag: 'Ae + Image Model',
      image: 'https://as2.ftcdn.net/jpg/05/94/18/91/1000_F_594189146_Bo5Epvpy8KFaEi3J9rnzYfZlFzc2Sz4H.jpg'
    },
    {
      id: 2,
      month: 'MAR',
      date: '2026.03.18',
      title: '快充學堂 (TBC)',
      desc: '深入解析 Creative Cloud 最新功能，聚焦於 Photoshop 與 Illustrator 的 AI 工具更新。',
      level: 'Graphic Design',
      tag: 'Ai + Firefly',
      image: 'https://as1.ftcdn.net/jpg/05/94/56/42/1000_F_594564219_zRPYNHWYj1I0Npg65DS9jrLdRCVjPFFa.jpg'
    },
    {
      id: 3,
      month: 'APR',
      date: '2026.04.01',
      title: '快充學堂 (TBC)',
      desc: 'Document Cloud 實戰應用，提升企業文檔流轉效率與 Acrobat AI Assistant 應用。',
      level: 'Document Cloud',
      tag: 'Pr + Video Model',
      image: 'https://as1.ftcdn.net/jpg/05/94/91/24/1000_F_594912441_CToO2a3I5g4Q1FsFyD9O18Strtix9NgP.jpg'
    },
    {
      id: 4,
      month: 'JUL',
      date: '2026.07.15',
      title: '快充學堂 (TBC)',
      desc: '進階 PDF 表單製作與簽署流程優化，確保企業資訊安全與合規。',
      level: 'Security & Legal',
      tag: 'Ps + Image Model',
      image: 'https://as1.ftcdn.net/jpg/05/95/78/54/1000_F_595785464_1BimG7UhIJoMYe15aT8dMO76O1m2qlBj.jpg'
    },
    {
      id: 5,
      month: 'JUL',
      date: '2026.07.29',
      title: '快充學堂 (TBC)',
      desc: 'Premiere Pro 與 Firefly Video Model 的整合應用，解決剪輯痛點。',
      level: 'Video Editing',
      tag: 'Au + Firefly',
      image: 'https://as2.ftcdn.net/jpg/05/96/22/11/1000_F_596221105_sDINJNHCg1DknHLS1OA2xYQ2c9gZo1eX.jpg'
    },
    {
      id: 6,
      month: 'SEP',
      date: '2026.09.02',
      title: '快充學堂 (TBC)',
      desc: '跨軟體協作流程，展示如何運用 CC Libraries 與 Frame.io 提升團隊效率。',
      level: 'Team Collab',
      tag: 'An + Firefly',
      image: 'https://as1.ftcdn.net/jpg/05/97/03/74/1000_F_597037412_01uM3YUCIU6M1T9X18i75EfUTkgI46b9.jpg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2000&auto=format&fit=crop';
  };

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if this section is currently visible
      const section = document.getElementById('academy');
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= -window.innerHeight / 2 && rect.bottom <= window.innerHeight * 1.5;
      
      if (isVisible) {
        if (e.key === 'ArrowLeft') {
          prevSlide();
        } else if (e.key === 'ArrowRight') {
          nextSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="min-h-screen py-8 md:py-10 px-6 md:px-20 border-b border-white/5 bg-gradient-to-b from-gray-900 to-black flex flex-col justify-center overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center h-full max-h-[90vh]">
        <div className="lg:col-span-1 flex flex-col justify-center">
          <SectionHeading 
            title="CC x AI 實戰工作流" 
            subtitle="2026 Adobe 快充學堂" 
            color="bg-purple-500"
          />
          <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed line-clamp-4 md:line-clamp-none">
            <strong className="text-white block mb-2 text-lg">從單點功能，到全方位解決方案</strong>
            2026 年的快充學堂聚焦於 <span className="text-purple-400 font-bold">Cross-App Synergy</span>。
            我們展示 Firefly 各大模型如何提供全方位流程解方。
          </p>
          
          <ul className="space-y-3 text-gray-400 mb-6 text-sm hidden md:block">
            <li className="flex items-center gap-3">
              <div className="bg-purple-900/50 p-1.5 rounded-lg text-purple-400"><BrainCircuit size={16} /></div>
              <span>多模型深度整合 (Ps/Ai/Pr/Ae)</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-purple-900/50 p-1.5 rounded-lg text-purple-400"><Sparkles size={16} /></div>
              <span>商業版權保障 (Commercial Safety)</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-purple-900/50 p-1.5 rounded-lg text-purple-400"><Fingerprint size={16} /></div>
              <span>工作流轉型：從勞動輸出到創意管理</span>
            </li>
          </ul>

          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-600 hover:bg-gray-700 hover:border-white transition"
              aria-label="Previous Course"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-600 hover:bg-gray-700 hover:border-white transition"
              aria-label="Next Course"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container - Adjusted for mobile visibility */}
        <div className="lg:col-span-2 overflow-hidden relative h-[450px] md:h-[420px] flex items-center -mx-6 md:mx-0 px-6 md:px-0">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6 pl-2"
            style={{ transform: `translateX(-${currentSlide * (280 + 16)}px)` }} 
          >
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="min-w-[280px] md:min-w-[300px] bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition group flex flex-col h-[400px] md:h-[380px] shadow-lg"
              >
                <div className="h-40 overflow-hidden relative shrink-0">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 filter brightness-75 group-hover:brightness-100" 
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-purple-600 text-white text-[9px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-widest">
                    {course.month} Session
                  </div>
                </div>
                
                <div className="p-4 md:p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-2 text-[10px] text-gray-500 font-mono">
                    <span className="flex items-center gap-1"><Calendar size={10} /> {course.date}</span>
                    <span className="border border-gray-600 px-2 rounded-full text-purple-400 border-purple-900/50 bg-purple-900/10 font-bold">{course.level}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-4 flex-1 leading-relaxed line-clamp-3">
                    {course.desc}
                  </p>
                  
                  <div className="mb-3">
                    <div className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-1">Core Focus</div>
                    <div className="bg-black/40 px-3 py-1 rounded-lg border border-white/5 text-purple-300 font-bold text-xs inline-block">
                      {course.tag}
                    </div>
                  </div>

                  <button className="w-full bg-white/5 hover:bg-purple-600 hover:text-white text-gray-300 border border-white/10 hover:border-purple-500 py-2.5 rounded-lg font-bold text-xs transition-all duration-300">
                    預約席次
                  </button>
                </div>
              </div>
            ))}
             <div className="min-w-[100px] flex items-center justify-center text-gray-600 flex-col gap-2">
               <Clock size={24} className="opacity-50"/>
               <span className="text-xs">More...</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
