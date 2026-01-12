
import React from 'react';
import { Cpu, Bot, Network } from 'lucide-react';
import { SectionHeading, Card } from './ui/Shared';

export const InsightSlide: React.FC = () => (
  <section className="min-h-screen py-10 pt-24 md:pt-10 px-6 md:px-20 flex flex-col justify-start md:justify-center border-b border-white/5 overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center h-full">
      <div className="flex flex-col justify-center">
        <SectionHeading 
          title={`行銷即服務 2.0：\n注入 AI 基因，專注 Adobe 增長`}
          subtitle="Adobe Growth Engine" 
          color="bg-blue-500"
        />
        <style>{`h2 { white-space: pre-line; }`}</style>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8 line-clamp-3 md:line-clamp-none">
          Weblink FY26 啟動 <strong className="text-white">Channel AI Empowerment</strong> 計畫。
          專注於利用 AI 技術<strong className="text-blue-400">優化 Adobe 產品銷售流程</strong>。
          透過智能輔助工具，協助經銷夥伴精準傳遞 Firefly 安全商用價值，有效降低企業採購門檻。
        </p>

        <div className="space-y-4 md:space-y-5">
          <Card className="border-l-4 border-l-blue-500 py-4 px-6">
            <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <Cpu className="text-blue-400" size={18} /> 行銷工具最佳化 (Adobe Ready)
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-tight">
              <span className="text-blue-400 font-bold">AI 動能注入：</span> 
              在行銷曝光過程中輔以 AI 動能，將傳統技術支援轉化為<strong className="text-white">知識架構</strong>，提高製作速度與品質，讓更多用戶耳目一新，也對後續內容寄予更多期待與關注。
            </p>
          </Card>
          
          <Card className="border-l-4 border-l-purple-500 py-4 px-6">
            <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <Bot className="text-purple-400" size={18} /> 經銷業務賦能 (Sales Co-pilot)
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-tight">
              <span className="text-purple-400 font-bold">加速銷售締結：</span>
              <strong className="text-white">工具滲透率 (Tool Penetration) 與成交率呈正相關。</strong>
              當業務越頻繁使用智能知識庫與 ROI 評估報告，回應客戶質疑的精準度越高，進而大幅縮短成交週期，讓優化過的行銷資源成為最強後盾。
            </p>
          </Card>

          <Card className="border-l-4 border-l-green-500 py-4 px-6">
            <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <Network className="text-green-400" size={18} /> Adobe 跨界生態整合
            </h3>
            <p className="text-gray-400 text-xs md:text-sm leading-tight">
              利用 AI 分析市場趨勢，主動媒合軟硬體品牌與 Adobe 的應用場景，構建 <strong className="text-white">「軟硬互利」</strong> 的聯合解決方案，擴大銷售接觸面並提升異業合作的潛在曝光度。
            </p>
          </Card>
        </div>
      </div>
      
      <div className="relative h-64 md:h-full min-h-[300px] md:max-h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group border border-gray-700 hidden lg:block">
         <img 
           src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop" 
           alt="AI Strategy Team" 
           className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700 filter brightness-75"
         />
         {/* Overlay Content */}
         <div className="absolute bottom-8 left-8 bg-black/70 backdrop-blur-md p-5 rounded-xl border border-white/10 max-w-xs">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded w-fit mb-2">
              FY26 Strategic Core
            </div>
            <p className="text-white font-bold text-2xl mb-1">Adobe Growth Engine</p>
            <p className="text-gray-300 text-xs leading-relaxed">
              全面導入 AI 協作流程，重新定義代理商價值鏈。
            </p>
         </div>
      </div>
    </div>
  </section>
);
