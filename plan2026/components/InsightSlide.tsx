
import React from 'react';
import { Layers, Zap, Network } from 'lucide-react';
import { SectionHeading, Card } from './ui/Shared';

export const InsightSlide: React.FC = () => (
  <section className="min-h-screen py-20 px-6 md:px-20 flex flex-col justify-center border-b border-white/5">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <SectionHeading 
          title="行銷即服務：解決痛點，事半功倍" 
          subtitle="Optimization & Efficiency" 
          color="bg-blue-500"
        />
        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          我們的行銷策略核心在於<strong className="text-white">「良好的資源供需配給」</strong>。
          我們持續向舊用戶佈達新知之外，也透過社群廣告向25-50的商業受眾持續投放曝光，利用軟硬體整合的優勢，精準解決企業導入 AI 工作流的阻礙，讓業務推廣更順暢。
        </p>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-blue-500">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Layers className="text-blue-400" size={20} /> 軟硬體整合行銷 (Turnkey Solution)
            </h3>
            <p className="text-gray-400 text-sm">
              <span className="text-blue-400 font-bold">雙重升級：</span> 
              <strong className="text-white">硬體是載體，軟體是靈魂。</strong> 
              Weblink 透過「軟硬體整合方案」，在企業升級算力 (GPU/Server) 的同時，植入 Adobe AI 工作流，實現 <strong className="text-white">Infrastructure + Workflow</strong> 的同步升級，確立 Adobe 在企業核心的不可替代性。
            </p>
          </Card>
          
          <Card className="border-l-4 border-l-purple-500">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Zap className="text-purple-400" size={20} /> 長尾經銷賦能 (Long-tail Enablement)
            </h3>
            <p className="text-gray-400 text-sm">
              台灣 80% 的中小企業由小型 SI 服務。我們提供產品標準化銷售懶人包，讓不懂設計的 SI 業務也能輕鬆向傳產老闆銷售 Adobe 數位轉型方案，解決經銷商的知識焦慮，縮短銷售週期。
            </p>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Network className="text-green-400" size={20} /> 生態系資源共享 (Resource Sharing)
            </h3>
            <p className="text-gray-400 text-sm">
              <span className="text-green-400 font-bold">綜效倍增：</span> 
              串聯公司內部代理品牌與外部過往周邊廠商合作資源，舉辦聯合品牌活動。讓原廠只需投入一份資源，就能獲得多重通路的曝光效益，實現 1+1 &gt; 2 的成果。
            </p>
          </Card>
        </div>
      </div>
      <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl group border border-gray-700">
         <img 
           src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2600&auto=format&fit=crop" 
           alt="Marketing Team Strategy" 
           className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-700 grayscale hover:grayscale-0"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
         <div className="absolute bottom-8 left-8">
            <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded w-fit mb-2">Since 2021</div>
            <p className="text-white font-bold text-2xl">Synergy & Growth</p>
            <p className="text-gray-400 text-sm mt-1">Ecosystem Orchestration</p>
         </div>
      </div>
    </div>
  </section>
);
