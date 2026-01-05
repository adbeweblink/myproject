
import React, { useState } from 'react';
import { TrendingUp, Award, Clock, ChevronLeft, ChevronRight, Calendar, BrainCircuit, Sparkles, Fingerprint } from 'lucide-react';
import { SectionHeading } from './ui/Shared';
import { CourseItem } from '../types';

export const AcademySection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 指定軟體順序：PS AI PR AE AU AN
  // 更新 Firefly Image 模型至版本 5 並更換 AE, AU, AN 縮圖
  const courses: CourseItem[] = [
    {
      id: 1,
      month: 'JAN',
      date: '2026.01.29',
      title: 'Photoshop × Firefly Image 5：商業影像合成新境界',
      desc: '深入解析 Photoshop 的「產生填滿」與「產生擴張」功能。學習如何運用 Firefly Image Model 5 生成符合商用版權的素材，並透過 AI 選取與修改技術，將原本需數天的合成工作縮短至分鐘級。',
      level: 'Image Editing',
      tag: 'Ps + Image Model',
      image: 'https://as1.ftcdn.net/jpg/05/95/78/54/1000_F_595785464_1BimG7UhIJoMYe15aT8dMO76O1m2qlBj.jpg'
    },
    {
      id: 2,
      month: 'FEB',
      date: '2026.02.25',
      title: 'Illustrator × Vector Model：從指令到無限縮放的矢量美學',
      desc: '解析 Firefly Vector Model 如何改變品牌識別設計。示範「文字建立向量圖形」功能，讓 AI 生成的可編輯路徑與漸層網格直接進入 Illustrator 工作流，實現行銷素材的極速規模化。',
      level: 'Graphic Design',
      tag: 'Ai + Vector Model',
      image: 'https://as1.ftcdn.net/jpg/05/94/56/42/1000_F_594564219_zRPYNHWYj1I0Npg65DS9jrLdRCVjPFFa.jpg'
    },
    {
      id: 3,
      month: 'MAR',
      date: '2026.03.25',
      title: 'Premiere Pro × Video Model：AI 補格與短影音生產力爆發',
      desc: '探討 Firefly Video Model 與 Premiere Pro 的原生整合。學習「產生擴張」解決鏡頭長度不足的痛點，並運用 AI 自動生成轉場與場景音效，打造專為社群媒體設計的高頻產出流程。',
      level: 'Video Editing',
      tag: 'Pr + Video Model',
      image: 'https://as1.ftcdn.net/jpg/05/94/91/24/1000_F_594912441_CToO2a3I5g4Q1FsFyD9O18Strtix9NgP.jpg'
    },
    {
      id: 4,
      month: 'APR',
      date: '2026.04.29',
      title: 'After Effects × Firefly：動態設計中的魔法效果與去背革新',
      desc: 'AE 不再只是手動逐格調整。本課程聚焦於 Firefly 如何輔助動態設計師。示範如何運用 AI 輔助快速生成動態背景與複雜遮罩，並將 3D 模型與 2D 動態透過 Firefly 進行無縫視覺統一。',
      level: 'Motion Design',
      tag: 'Ae + Visual FX',
      image: 'https://as2.ftcdn.net/jpg/05/94/18/91/1000_F_594189146_Bo5Epvpy8KFaEi3J9rnzYfZlFzc2Sz4H.jpg'
    },
    {
      id: 5,
      month: 'MAY',
      date: '2026.05.27',
      title: 'Audition × Firefly Audio：AI 聲學淨化與音效生成',
      desc: '探索 Firefly 在聲音工程的潛力。學習運用 AI 進行極致降噪、人聲增益，並透過文字指令直接生成符合氛圍的商用環境音效與配樂素材，為影片作品注入專業靈魂。',
      level: 'Audio Engineering',
      tag: 'Au + Audio Model',
      image: 'https://as2.ftcdn.net/jpg/05/96/22/11/1000_F_596221105_sDINJNHCg1DknHLS1OA2xYQ2c9gZo1eX.jpg'
    },
    {
      id: 6,
      month: 'JUN',
      date: '2026.06.24',
      title: 'Animate × GenAI Animation：從靜態向量到動態互動的 AI 橋樑',
      desc: '運用 AI 輔助骨架生成與角色設計。展示如何將 Firefly 生成的向量素材無縫轉化為可動角色，並利用 AI 補間技術大幅節省傳統動畫製作的時間成本，實現快速原型設計。',
      level: 'Interactive Animation',
      tag: 'An + Interaction',
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

  return (
    <section className="min-h-screen py-20 px-6 md:px-20 border-b border-white/5 bg-gradient-to-b from-gray-900 to-black flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <SectionHeading 
            title="Firefly 跨軟體協奏：CC 實戰工作流" 
            subtitle="2026 Adobe快充學堂" 
            color="bg-purple-500"
          />
          <p className="text-gray-300 mb-8 leading-relaxed">
            <strong className="text-white block mb-2 text-xl">從單點功能，到全案解決方案</strong>
            2026 年的快充學堂聚焦於 <span className="text-purple-400 font-bold">Cross-App Synergy (軟體協同綜效)</span>。
            <br/><br/>
            我們遍歷 Creative Cloud 核心軟體：<span className="text-white">Ps, Ai, Pr, Ae, Au, An</span>，展示 Firefly 各大模型如何提供全方位流程解方。
          </p>
          
          <ul className="space-y-4 text-gray-400 mb-8">
            <li className="flex items-center gap-3">
              <div className="bg-purple-900/50 p-2 rounded-lg text-purple-400"><BrainCircuit size={20} /></div>
              <span>多模型深度整合 (Ps/Ai/Pr/Ae/Au/An)</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-purple-900/50 p-2 rounded-lg text-purple-400"><Sparkles size={20} /></div>
              <span>商業版權保障 (Commercial Safety) 實務</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-purple-900/50 p-2 rounded-lg text-purple-400"><Fingerprint size={20} /></div>
              <span>工作流轉型：從勞動輸出到創意管理</span>
            </li>
          </ul>

          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-gray-600 hover:bg-gray-700 hover:border-white transition"
              aria-label="Previous Course"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-gray-600 hover:bg-gray-700 hover:border-white transition"
              aria-label="Next Course"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 overflow-hidden relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentSlide * (320 + 24)}px)` }} 
          >
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="min-w-[320px] bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition group flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    onError={handleImageError}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700 filter brightness-75 group-hover:brightness-100" 
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg uppercase tracking-widest">
                    {course.month} Session
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-3 text-xs text-gray-500 font-mono">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {course.date}</span>
                    <span className="border border-gray-600 px-2 rounded-full text-purple-400 border-purple-900/50 bg-purple-900/10 font-bold">{course.level}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition leading-tight text-balance">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-6 flex-1 leading-relaxed">
                    {course.desc}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1.5">Core Focus</div>
                    <div className="bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 text-purple-300 font-bold text-xs inline-block">
                      {course.tag}
                    </div>
                  </div>

                  <button className="w-full bg-white/5 hover:bg-purple-600 hover:text-white text-gray-300 border border-white/10 hover:border-purple-500 py-3 rounded-lg font-bold text-sm transition-all duration-300">
                    預約席次
                  </button>
                </div>
              </div>
            ))}
             <div className="min-w-[100px] flex items-center justify-center text-gray-600 flex-col gap-2">
               <Clock size={24} className="opacity-50"/>
               <span className="text-xs">More Coming...</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
